import React from 'react';

const DrizzVerificationBanner: React.FC = () => {
  return (
    <div style={{
      background: 'rgba(255, 255, 0, 0.15)',
      color: '#ff0',
      padding: '1em',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '1.1em',
      maxWidth: '900px',
      margin: '3em auto',
      border: '2px dashed #ff0',
      borderRadius: '10px'
    }}>
      🧠 DRIZZ TOKEN HOLDERS: You’ll need at least <span style={{ color: '#fff' }}>250 DRIZZ</span> to access exclusive content. Connect your wallet to verify access to the DRIZZ Vault Zone!
    </div>
  );
};

export default DrizzVerificationBanner;
