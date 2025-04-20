import React, { useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useRouter } from 'next/router';
import { supabase } from '../utils/supabaseClient';
import VaultLoadingScreen from './VaultLoadingScreen';
import Link from 'next/link';

const REQUIRED_BALANCE = 250;
const MINT_ADDRESS = process.env.NEXT_PUBLIC_DRIZZ_MINT_ADDRESS || '';

export default function VaultAccessGate() {
  const { publicKey, connected, disconnect } = useWallet();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyAccess = async () => {
      const timeout = setTimeout(() => {
        logAccessAttempt('timeout');
        router.push('/access-denied');
      }, 15000);

      try {
        if (!connected || !publicKey) {
          logAccessAttempt('no_wallet');
          clearTimeout(timeout);
          router.push('/access-denied');
          return;
        }

        const response = await fetch(`/api/check-drizz-holdings?wallet=${publicKey}`);
        const result = await response.json();

        if (!result.success || result.balance < REQUIRED_BALANCE) {
          logAccessAttempt('insufficient', publicKey.toBase58());
          clearTimeout(timeout);
          router.push('/access-denied');
        } else {
          clearTimeout(timeout);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Verification error:', error);
        logAccessAttempt('error', publicKey?.toBase58());
        clearTimeout(timeout);
        router.push('/access-denied');
      }
    };

    verifyAccess();
  }, [connected, publicKey]);

  const logAccessAttempt = async (status: string, wallet?: string) => {
    try {
      const ip = await fetch('/api/get-ip').then((res) => res.text());
      let geo = { city: null, region: null, country: null };
      try {
        const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
        if (geoRes.ok) {
          const data = await geoRes.json();
          geo = {
            city: data.city || null,
            region: data.region || null,
            country: data.country_name || null,
          };
        }
      } catch (geoErr) {
        console.warn('Geo lookup failed:', geoErr);
      }

      await supabase.from('access_logs').insert([
        {
          wallet: wallet || null,
          status,
          timestamp: new Date().toISOString(),
          ip,
          city: geo.city,
          region: geo.region,
          country: geo.country,
        },
      ]);
    } catch (err) {
      console.warn('Logging failed:', err);
    }
  };

  if (isLoading) return <VaultLoadingScreen onComplete={() => setIsLoading(false)} />;

  return (
    <div style={{ padding: '2rem', color: '#fff', textAlign: 'center' }}>
      <h1>Welcome to the DRIZZ Vault 🧠</h1>
      <p style={{ marginBottom: '1.5rem' }}>
        You now have access to exclusive content, archived comics, and gated merch.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        <Link href="/vault/comics">
          <button style={buttonStyle}>📚 Exclusive Comics</button>
        </Link>
        <Link href="/vault/archives">
          <button style={buttonStyle}>🗂 Archived Comics</button>
        </Link>
        <Link href="/vault/merch">
          <button style={buttonStyle}>🛒 Gated Merch</button>
        </Link>
      </div>

      <button onClick={disconnect} style={disconnectStyle}>
        Disconnect Wallet
      </button>
    </div>
  );
}

const buttonStyle = {
  padding: '12px 20px',
  fontSize: '1rem',
  borderRadius: '8px',
  backgroundColor: '#1e3a8a',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
  boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
};

const disconnectStyle = {
  marginTop: '2rem',
  padding: '10px 20px',
  borderRadius: '8px',
  border: 'none',
  backgroundColor: '#d9534f',
  color: '#fff',
  cursor: 'pointer',
};
