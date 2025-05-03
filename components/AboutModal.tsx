import React from 'react';

interface AboutModalProps {
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ onClose }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000,
        overflowY: 'auto',
      }}
    >
      <div
        style={{
          background: '#fff',
          padding: '2rem',
          borderRadius: '12px',
          maxWidth: '800px',
          width: '90%',
          color: '#000',
        }}
      >
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>About DRIZZ</h2>

        <section style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Why DRIZZ Was Created</h3>
          <p>
            DRIZZ was born out of the absurdity of our political reality, the chaotic rise of memecoins,
            and the power of Web3 to flip the script. Instead of chasing vaporware promises, we built something
            meaningful – and hilarious. At the same time, Web3 and blockchain offer real tools for change:
            decentralization, transparency, and community ownership.
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            DRIZZ combines both worlds. It's a satirical memecoin built with purpose — using humor
            to expose dysfunction while empowering a community through token-based access, comic
            storytelling, and real-time commentary. In a sea of senseless memecoins, DRIZZ is the
            meme that <em>actually</em> makes <em>sense</em>.
          </p>
        </section>

        <section style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Who’s Behind DRIZZ?</h3>
          <p>
            The creator of DRIZZ is an experienced systems engineer and developer who’s spent years in tech,
            believes in accountability, and saw an opportunity to fuse satire, economic empowerment, and
            storytelling into a single mission. The identity doesn’t matter — the message does.
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            DRIZZ is a way of punching up — using code, comics, and community to call out
            corruption, idiocy, and the broken incentives of our current systems.
          </p>
        </section>

        <section style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Our Mission</h3>
          <ul style={{ paddingLeft: '1.25rem', marginTop: '0.5rem' }}>
            <li>Build a decentralized satirical universe powered by Web3.</li>
            <li>Use meme-based storytelling to expose broken systems.</li>
            <li>Offer real utility and content that rewards truth-telling and laughter.</li>
            <li>Turn passive followers into active engagement — through comics, governance, and creativity.</li>
            <li>Bridge political satire and crypto utility in one shared cultural movement.</li>
          </ul>
        </section>

        <p style={{ textAlign: 'center', fontStyle: 'italic', fontWeight: 500 }}>
          If we don’t laugh, we’ll cry — DRIZZ gives us both.
        </p>

        <p style={{ textAlign: 'center', marginTop: '2rem', fontWeight: 'bold' }}>
          So without further ado, it’s time to...
        </p>

        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
          <img
            src="/images/ride-a-memecoin.png"
            alt="Save a Horse and Ride a Memecoin"
            style={{ borderRadius: '10px', maxWidth: '100%' }}
          />
        </div>

        <div style={{ textAlign: 'right', marginTop: '2rem' }}>
          <button
            onClick={onClose}
            style={{
              padding: '0.5rem 1rem',
              background: '#000',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;