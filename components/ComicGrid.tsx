import React from 'react';
import Image from 'next/image';

const ComicGrid: React.FC = () => {
  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '1em' }}>📚 Comic Archive</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '1em',
        justifyContent: 'center'
      }}>
        <div style={{ textAlign: 'center' }}>
          <Image src="/comics/sample-archive-001.png" alt="Sample Comic" width={220} height={220} />
          <p><strong>Comic #001</strong><br />04/01/2024</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Image src="/comics/sample-archive-002.png" alt="Sample Comic" width={220} height={220} />
          <p><strong>Comic #002</strong><br />04/08/2024</p>
        </div>
      </div>
      <p style={{ textAlign: 'center', marginTop: '1em', color: '#aaa' }}>Older comics are stored in the DRIZZ Vault (250+ DRIZZ required).</p>
    </div>
  );
};

export default ComicGrid;
