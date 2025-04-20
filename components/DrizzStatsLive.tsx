import React, { useEffect, useState } from 'react';

interface TokenStats {
  circulating: number;
  holders: number;
  transactions: number;
}

export default function DrizzStatsLive() {
  const [stats, setStats] = useState<TokenStats>({
    circulating: 0,
    holders: 0,
    transactions: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      const apiKey = process.env.NEXT_PUBLIC_HELIUS_API_KEY;
      const mint = process.env.NEXT_PUBLIC_DRIZZ_MINT;
  
      if (!apiKey || !mint) {
        console.warn('Missing Helius API key or DRIZZ mint address');
        return;
      }
  
      try {
        const response = await fetch(
          `https://api.helius.xyz/v0/token-metadata?api-key=${apiKey}&mint=${mint}`
        );
  
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
  
        const data = await response.json();
  
        setStats({
          circulating: data.supply || 0,
          holders: data.numberOfHolders || 0,
          transactions: data.txCount || 0,
        });
      } catch (error) {
        console.error('Error fetching token stats:', error);
      }
    };
  
    fetchStats();
  }, []);  

  return (
    <div style={{ background: 'rgba(0,0,0,0.5)', padding: '40px 20px', textAlign: 'center', borderRadius: '10px' }}>
      <h2 style={{ color: '#d4a373', fontSize: '2em' }}>DRIZZ Token Stats</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px', marginTop: '15px' }}>
        <div style={card}><h3>🪙 Max Supply</h3><p style={value}>340,000,000 DRIZZ</p></div>
        <div style={card}><h3>🔄 In Circulation</h3><p style={value}>{stats.circulating.toLocaleString()} DRIZZ</p></div>
        <div style={card}><h3>📦 Transactions</h3><p style={value}>{stats.transactions}</p></div>
        <div style={card}><h3>👛 Wallet Holders</h3><p style={value}>{stats.holders}</p></div>
      </div>
      <p style={{ marginTop: '20px', fontStyle: 'italic', color: '#999' }}>
        
      </p>
    </div>
  );
}

const card = {
  background: '#1a1a1a',
  padding: '20px 30px',
  borderRadius: '10px',
  border: '1px solid #444',
  color: '#fff',
};

const value = {
  fontSize: '1.5em',
  fontWeight: 'bold',
  color: '#d4a373',
};
