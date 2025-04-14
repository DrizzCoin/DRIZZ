import React from 'react';

const DrizzStatsLive: React.FC = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>📊 DRIZZ Token Stats</h2>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-around', 
        flexWrap: 'wrap', 
        gap: '1em',
        marginTop: '1.5em'
      }}>
        <div style={{ background: '#111', padding: '1.2em', borderRadius: '12px', minWidth: '220px', boxShadow: '0 0 10px #00f5ff66' }}>
          <h3>💥 Max Supply</h3>
          <p style={{ fontSize: '1.4em' }}>340,000,000 DRIZZ</p>
        </div>
        <div style={{ background: '#111', padding: '1.2em', borderRadius: '12px', minWidth: '220px', boxShadow: '0 0 10px #00f5ff66' }}>
          <h3>🔁 In Circulation</h3>
          <p style={{ fontSize: '1.4em' }}>314,000,000 DRIZZ</p>
        </div>
        <div style={{ background: '#111', padding: '1.2em', borderRadius: '12px', minWidth: '220px', boxShadow: '0 0 10px #00f5ff66' }}>
          <h3>🧠 Verified Holders</h3>
          <p style={{ fontSize: '1.4em' }}>TBA</p>
        </div>
      </div>
    </div>
  );
};

export default DrizzStatsLive;
