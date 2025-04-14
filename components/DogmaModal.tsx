import React from 'react';
import { FaTimes, FaDownload } from 'react-icons/fa';
import Image from 'next/image';

interface DogmaModalProps {
  onClose: () => void;
}

const DogmaModal: React.FC<DogmaModalProps> = ({ onClose }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.9)',
        color: '#fff',
        zIndex: 9999,
        overflowY: 'auto',
        padding: '2em'
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'right' }}>
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.5em', cursor: 'pointer' }}
            aria-label="Close"
          >
            <FaTimes />
          </button>
        </div>

        <h1 style={{ textAlign: 'center' }}>DRIZZ Dogma</h1>

        <section style={{ borderTop: '2px solid #00ff00', paddingTop: '1em' }}>
          <h2>Introduction</h2>
          <p>
            Welcome to the world of <strong>DRIZZ</strong>, the memecoin with a twist. Combining the humor of satirical comics with the resistance of blockchain utility, DRIZZ is here to disrupt the norm. Born from the chaos of modern politics and social commentary, DRIZZ represents not just a token, but a movement. With its iconic characters, DRIZZ (a witty Chief of a government agency) and his loyal Deputy Dog, "Kick," this memecoin is ready to bring laughs, utility, and a sense of community to its holders.
          </p>
        </section>

        <section style={{ borderTop: '2px solid #00ff00', paddingTop: '1em' }}>
          <h2>Token Overview</h2>
          <ul>
            <li><strong>Token Name:</strong> DRIZZ</li>
            <li><strong>Blockchain:</strong> Solana</li>
            <li><strong>Token Standard:</strong> SPL (Solana Program Library)</li>
            <li><strong>Max Supply:</strong> 340,000,000 DRIZZ</li>
            <li><strong>Utility:</strong> Holding DRIZZ tokens grants access to exclusive content, including weekly satirical comics.</li>
          </ul>
        </section>

        <section style={{ borderTop: '2px solid #00ff00', paddingTop: '1em' }}>
          <h2>Tokenomics & Distribution</h2>
          <p>
            DRIZZ isn’t just hype—our tokenomics ensure a balanced, fair distribution while fueling long-term growth. Join us as part of the revolution.
          </p>
          <table style={{ width: '100%', textAlign: 'left', background: '#111', padding: '1em', borderRadius: '8px' }}>
            <thead>
              <tr>
                <th>Category</th>
                <th>Tokens Allocated</th>
                <th>% of Supply</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Founder's Allocation (Vesting)</td><td>102,000,000 DRIZZ</td><td>30%</td></tr>
              <tr><td>Liquidity Pool (DEX & Listings)</td><td>68,000,000 DRIZZ</td><td>20%</td></tr>
              <tr><td>Public (Pre-sale / Investors)</td><td>51,000,000 DRIZZ</td><td>15%</td></tr>
              <tr><td>Marketing & Partnerships</td><td>25,500,000 DRIZZ</td><td>7.5%</td></tr>
              <tr><td>Community Rewards & Airdrops</td><td>25,500,000 DRIZZ</td><td>7.5%</td></tr>
              <tr><td>Staking, Token-Gated Access</td><td>17,000,000 DRIZZ</td><td>5%</td></tr>
              <tr><td>Development & Team Reserves</td><td>51,000,000 DRIZZ</td><td>15%</td></tr>
            </tbody>
          </table>
        </section>

        <section style={{ textAlign: 'center', marginTop: '1.5em' }}>
          <a
            href="/public/docs/DRIZZ_Tokenomics_Utility_Overview.pdf"
            download
            style={{
              padding: '12px 24px',
              backgroundColor: '#007bff',
              borderRadius: '8px',
              color: '#fff',
              textDecoration: 'none',
              fontSize: '1em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5em'
            }}
          >
            <FaDownload /> Download Tokenomics PDF
          </a>
        </section>

        <section style={{ borderTop: '2px solid #00ff00', paddingTop: '1em', marginTop: '2em' }}>
          <h2>Legal Disclaimer</h2>
          <p>
            DRIZZ is not affiliated with or endorsed by any government agency or individual. A portion of funds may support legal aid initiatives, subject to available resources, operational priorities, and compliance with applicable laws. Participation involves risk. Please consult legal or financial professionals before proceeding.
          </p>
        </section>
      </div>
    </div>
  );
};

export default DogmaModal;
