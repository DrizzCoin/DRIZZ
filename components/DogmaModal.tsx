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
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.9)',
        zIndex: 9999,
        overflowY: 'auto',
        padding: '2em',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'right' }}>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              fontSize: '1.5em',
              cursor: 'pointer',
            }}
            aria-label="Close"
          >
            <FaTimes />
          </button>
        </div>

        <h1 style={{ textAlign: 'center' }}>📜 DRIZZ Dogma</h1>

        <section style={{ borderTop: '2px solid #00ff00', paddingTop: '1em' }}>
          <h2>📘 Introduction</h2>
          <p>
            Welcome to the world of <strong>DRIZZ</strong>, the memecoin with a twist. Combining the humor of satirical comics with the resistance of blockchain, DRIZZ is your ticket to a decentralized future—one comic at a time.
          </p>
        </section>

        <section style={{ borderTop: '2px solid #00ff00', paddingTop: '1em' }}>
          <h2>📌 Token Overview</h2>
          <ul>
            <li><strong>Token Name:</strong> DRIZZ</li>
            <li><strong>Blockchain:</strong> Solana</li>
            <li><strong>Token Standard:</strong> SPL (Solana Program Library)</li>
            <li><strong>Max Supply:</strong> 340,000,000 DRIZZ</li>
            <li><strong>Utility:</strong> Holding DRIZZ tokens grants access to exclusive content, including weekly satirical comics.</li>
          </ul>
        </section>

        <section style={{ borderTop: '2px solid #00ff00', paddingTop: '1em' }}>
          <h2>📊 Tokenomics & Distribution</h2>
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
              <tr><td>Founder’s Allocation (Vesting)</td><td>102,000,000 DRIZZ</td><td>30%</td></tr>
              <tr><td>Liquidity Pool (DEX & Listings)</td><td>68,000,000 DRIZZ</td><td>20%</td></tr>
              <tr><td>Public (Presale + Investors)</td><td>51,000,000 DRIZZ</td><td>15%</td></tr>
              <tr><td>Marketing & Partnerships</td><td>25,500,000 DRIZZ</td><td>7.5%</td></tr>
              <tr><td>Community Rewards & Airdrops</td><td>25,500,000 DRIZZ</td><td>7.5%</td></tr>
              <tr><td>Staking, Token-Backed Access</td><td>17,000,000 DRIZZ</td><td>5%</td></tr>
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
              backgroundColor: '#00ff00',
              color: '#fff',
              borderRadius: '8px',
              fontWeight: 'bold',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5em',
            }}
          >
            <FaDownload /> Download Tokenomics PDF
          </a>
        </section>

        <section style={{ marginTop: '4em', textAlign: 'center' }}>
          <Image
            src="/images/DRIZZ_and_KICK_resized.png"
            alt="DRIZZ and KICK"
            width={480}
            height={280}
          />
          <p style={{ marginTop: '1em', fontSize: '1.2em', fontWeight: 'bold' }}>
            Meet DRIZZ, the confident and witty Chief of a government agency, and his loyal Deputy Dog, “Kick.” Together, they embody the spirit of humor, resistance, and community that defines the DRIZZ memecoin.
          </p>

          <div style={{ marginTop: '2em', background: '#111', padding: '1.5em', borderRadius: '10px' }}>
            <h4 style={{ color: '#00FF00', marginBottom: '0.5em' }}>Legal Disclaimer</h4>
            <p style={{ color: '#fff', fontSize: '0.9em' }}>
              DRIZZ is not affiliated with or endorsed by any government agency or individual.
              A portion of funds may support legal aid initiatives, subject to available resources,
              operational priorities, and compliance with applicable laws. Participation involves risk.
              Please consult legal or financial professionals before proceeding.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DogmaModal;
