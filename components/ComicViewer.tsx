import React from 'react';
import Image from 'next/image';

const ComicViewer: React.FC = () => {
  return (
    <section id="comic-viewer" style={{ marginBottom: '2em' }}>
      <h3 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '1em', color: '#d4a373' }}>
        <span role="img" aria-label="book">📖</span> Comic Viewer • Free Access
      </h3>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1em', flexWrap: 'wrap', marginTop: '1em' }}>
        <Image
          src="/comics/sample-001.png"
          alt="Comic Strip 001"
          width={150}
          height={150}
          style={{ borderRadius: '10px', background: '#111' }}
        />
        <Image
          src="/comics/sample-002.png"
          alt="Comic Strip 002"
          width={150}
          height={150}
          style={{ borderRadius: '10px', background: '#111' }}
        />
      </div>
      <div style={{ background: 'rgba(0,0,0,0.8)', border: '1px dashed #d4a373', borderRadius: '8px', maxWidth: '400px', margin: '2em auto', padding: '1em' }}>
        <p style={{ color: '#d4a373', fontWeight: 'bold', marginBottom: '0.4em' }}>
          🔐 Unlock Exclusive Comics <span role="img" aria-label="lock">🔒</span>
        </p>
        <p style={{ color: '#ccc', fontSize: '0.9em' }}>
          Connect your wallet to access token-gated comic strips.
        </p>
        <button
          style={{
            marginTop: '0.8em',
            padding: '10px 20px',
            backgroundColor: '#d4a373',
            color: '#000',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          Connect Wallet
        </button>
      </div>
    </section>
  );
};

export default ComicViewer;
