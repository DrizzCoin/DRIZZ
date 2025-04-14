import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const WalletMultiButtonDynamic = dynamic(
  () => import('@solana/wallet-adapter-react-ui').then((mod) => mod.WalletMultiButton),
  { ssr: false }
);

const Vault = () => {
  return (
    <div style={{ padding: '2em', fontFamily: 'Oswald, sans-serif', color: '#fff' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1em' }}>🚪 DRIZZ Vault Access</h1>
      <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2em' }}>
        Verified holders with <strong>250+ DRIZZ</strong> tokens gain access to archived comics,
        exclusive merch, and behind-the-scenes content.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2em' }}>
        <WalletMultiButtonDynamic />
      </div>

      <section style={{ background: 'rgba(0,0,0,0.8)', padding: '2em', borderRadius: '12px', marginBottom: '2em' }}>
        <h2 style={{ textAlign: 'center' }}>🗂️ Archived Comics</h2>
        <div style={{ display: 'flex', gap: '2em', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Image src="/comics/sample-archive-001.png" alt="Archived Comic 001" width={240} height={240} />
          <Image src="/comics/sample-archive-002.png" alt="Archived Comic 002" width={240} height={240} />
        </div>
      </section>

      <section style={{ background: 'rgba(0,0,0,0.8)', padding: '2em', borderRadius: '12px' }}>
        <h2 style={{ textAlign: 'center' }}>🧢 Exclusive Merch</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2em', marginTop: '1em' }}>
          <div style={{ background: '#111', padding: '1em', borderRadius: '10px', textAlign: 'center' }}>
            <Image src="/merch/exclusive-hat.png" alt="Exclusive Hat" width={150} height={150} />
            <p>"Stand Tall" DRIZZ Cap</p>
          </div>
          <div style={{ background: '#111', padding: '1em', borderRadius: '10px', textAlign: 'center' }}>
            <Image src="/merch/rare-shirt.png" alt="Exclusive Shirt" width={150} height={150} />
            <p>Limited-Edition Tee</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vault;
