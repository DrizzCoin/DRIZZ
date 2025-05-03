import React from 'react';
import { FaTimes } from 'react-icons/fa';
import Image from 'next/image';

interface AboutModalProps {
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ onClose }) => {
  return (
    <div
      style={{
        display: 'block',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.8)',
        zIndex: 9999,
        color: '#fff',
        overflowY: 'auto',
        padding: '40px 0',
        transition: 'opacity 0.3s ease-in-out',
      }}
    >
      <div
        style={{
          maxWidth: '550px',
          margin: '0 auto',
          background: '#222',
          borderRadius: '10px',
          padding: '20px 30px',
          position: 'relative',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            float: 'right',
            background: 'transparent',
            border: 'none',
            fontSize: '20px',
            color: '#fff',
            cursor: 'pointer',
          }}
          aria-label="Close"
        >
          <FaTimes />
        </button>

        {/* Title */}
        <h1 style={{ textAlign: 'center' }}>💠 <strong>About DRIZZ</strong></h1>

        {/* Section 1 */}
        <section>
          <h2 style={sectionTitleStyle}>🌀 Why DRIZZ Was Created</h2>
          <hr style={dividerStyle} />
          <p>
            DRIZZ was born out of the absurdity of our political reality, the chaotic rise of memecoins, and the power of Web3 to flip the script. 
            Instead of chasing vaporware promises, we built something meaningful – and hilarious. 
            At the same time, Web3 and blockchain offer real tools for change: decentralization, transparency, and community ownership.
          </p>
          <p style={{ marginTop: '1em' }}>
            DRIZZ combines both worlds. It's a satirical memecoin built with purpose — using humor to expose dysfunction while empowering a community 
            through token-based access, comic storytelling, and real-time commentary. In a sea of senseless memecoins, DRIZZ is the meme that <em>actually</em> makes <em>sense</em>.
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h2 style={sectionTitleStyle}>👤 Who’s Behind DRIZZ?</h2>
          <hr style={dividerStyle} />
          <p>
            The creator of DRIZZ is an experienced systems engineer and developer who’s spent years in tech, believes in accountability, 
            and saw an opportunity to fuse satire, economic empowerment, and storytelling into a single mission. 
            The identity doesn’t matter — the message does.
          </p>
          <p style={{ marginTop: '1em' }}>
            DRIZZ is a way of punching up — using code, comics, and community to call out corruption, idiocy, and the broken incentives of our current systems.
          </p>
        </section>

        {/* Section 3 */}
        <section>
          <h2 style={sectionTitleStyle}>🎯 Our Mission</h2>
          <hr style={dividerStyle} />
          <ul style={{ paddingLeft: '1.25rem', marginTop: '0.5rem' }}>
            <li>Build a decentralized satirical universe powered by Web3.</li>
            <li>Use meme-based storytelling to expose broken systems.</li>
            <li>Offer real utility and content that rewards truth-telling and laughter.</li>
            <li>Turn passive followers into active engagement — through comics, governance, and creativity.</li>
            <li>Bridge political satire and crypto utility in one shared cultural movement.</li>
          </ul>
        </section>

        {/* Slogan */}
        <p style={{ textAlign: 'center', fontStyle: 'italic', fontWeight: 500, marginTop: '2rem' }}>
          If we don’t laugh, we’ll cry — DRIZZ gives us both.
        </p>

        <p style={{ textAlign: 'center', marginTop: '2rem', fontWeight: 'bold' }}>
          So without further ado, it’s time to...
        </p>

        {/* Image */}
        <section style={{ textAlign: 'center', marginTop: '1.5em' }}>
          <Image
            src="/images/ride-a-memecoin.png"
            alt="Save a Horse and Ride a Memecoin"
            width={300}
            height={300}
            style={{ borderRadius: '10px' }}
          />
        </section>
      </div>
    </div>
  );
};

const sectionTitleStyle = {
  color: '#40ae44',
  fontSize: '1.5em',
  fontWeight: 'bold',
  marginTop: '1.5em',
};

const dividerStyle = {
  border: 'none',
  borderTop: '2px solid #40ae44',
  marginBottom: '1em',
};

export default AboutModal;
