// DogmaModal.tsx
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
        <h1 style={{ textAlign: 'center' }}>💠 <strong>DRIZZ Dogma</strong></h1>

        {/** Sections */}
        {[{
          icon: '📘', title: 'Introduction', content: (
            <p>
              Welcome to the world of <strong>DRIZZ</strong>, the memecoin with a twist. Combining the humor of satirical comics with the innovation of blockchain technology, DRIZZ is here to disrupt the norm. Born from the chaos of modern politics and social commentary, DRIZZ represents not just a token, but a movement. With its iconic characters, DRIZZ (a witty Chief of a government agency) and his loyal Deputy Dog, “Kick,” this memecoin is ready to bring laughs, utility, and a sense of community to its holders.
            </p>)
        }, {
          icon: '📌', title: 'Token Overview', content: (
            <p>
              <strong>Token Name:</strong> DRIZZ<br />
              <strong>Blockchain:</strong> Solana<br />
              <strong>Token Standard:</strong> SPL (Solana Program Library)<br />
              <strong>Max Supply:</strong> 340,000,000 DRIZZ<br />
              <strong>Utility:</strong> Holding DRIZZ tokens grants access to exclusive content, including weekly satirical comics.
            </p>)
        }, {
          icon: '📊', title: 'Tokenomics & Distribution', content: (
            <>
              <p>
                DRIZZ isn’t just hype—our tokenomics ensure a balanced, fair distribution while fueling long-term growth. Join us as part of the revolution.
              </p>
              <table style={{ width: '100%', color: 'white', borderCollapse: 'collapse', marginBottom: '20px' }}>
                <thead style={{ background: '#444' }}>
                  <tr>
                    <th>Category</th>
                    <th>Tokens Allocated</th>
                    <th>% of Supply</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Founder’s Allocation (Vesting)</td><td>102,000,000 DRIZZ</td><td>30%</td></tr>
                  <tr><td>Liquidity Pool (DEX & Listings)</td><td>68,000,000 DRIZZ</td><td>20%</td></tr>
                  <tr><td>Public (Pre-sale / Investors)</td><td>51,000,000 DRIZZ</td><td>15%</td></tr>
                  <tr><td>Marketing & Partnerships</td><td>25,500,000 DRIZZ</td><td>7.5%</td></tr>
                  <tr><td>Community Rewards & Airdrops</td><td>25,500,000 DRIZZ</td><td>7.5%</td></tr>
                  <tr><td>Staking, Token-Gated Access</td><td>17,000,000 DRIZZ</td><td>5%</td></tr>
                  <tr><td>Development & Team Reserves</td><td>51,000,000 DRIZZ</td><td>15%</td></tr>
                  <tr>
                    <td colSpan={3} style={{ textAlign: 'center', paddingTop: '20px' }}>
                      <a
                        download
                        href="/DRIZZ_Tokenomics%20_Utility_Overview.html"
                        style={{
                          backgroundColor: '#0047AB',
                          color: 'white',
                          padding: '10px 20px',
                          borderRadius: '8px',
                          textDecoration: 'none',
                          fontWeight: 'bold',
                          display: 'inline-block'
                        }}
                      >
                        📥 Download Tokenomics PDF
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </>)
        }, {
          icon: '🧩', title: 'Utility & Use Case', content: (
            <p>
              DRIZZ merges comedic satire with real blockchain utility. Public weekly comics are free for all, while exclusive continued storylines are reserved for DRIZZ token holders via wallet-based token verification or gated access mechanisms, airdrops, or NFT distributions.
            </p>)
        }, {
          icon: '🔐', title: 'Security & Transparency', content: (
            <p>
              DRIZZ ensures secure Web3 authentication, liquidity locking, and team vesting schedules for transparency and long-term trust.
            </p>)
        }, {
          icon: '🗺️', title: 'Roadmap', content: (
            <ul>
              <li><strong>Phase 1:</strong> Token launch & community growth</li>
              <li><strong>Phase 2:</strong> Exclusive comic airdrops</li>
              <li><strong>Phase 3:</strong> Transition to NFTs & governance</li>
            </ul>)
        }].map(({ icon, title, content }) => (
          <section key={title}>
            <h2 style={{ color: '#40ae44', fontSize: '1.5em', fontWeight: 'bold', marginTop: '1em' }}>{icon} {title}</h2>
            <hr style={{ border: 'none', borderTop: '2px solid #40ae44', marginBottom: '1em' }} />
            {content}
          </section>
        ))}
         <h4>
       Meet the Team
        </h4>
        <section style={{ marginTop: '1em', textAlign: 'center' }}>
          <Image
            src="/images/DRIZZ_and_KICK_resized.png"
            alt="DRIZZ and KICK"
            width={300}
            height={300}
          />
          <p style={{ marginTop: '1em', fontSize: '1em', fontWeight: 'bold' }}>
            Meet DRIZZ, the confident and witty Chief of a government agency, and his loyal Deputy Dog, “Kick.” Together, they embody the spirit of humor, resistance, and community that defines the DRIZZ memecoin.
          </p>

          <div style={{ marginTop: '1.5em', background: '#111', padding: '.5em', borderRadius: '10px' }}>
            <h4 style={{ color: '#40ae44', marginBottom: '0.5em' }}>Legal Disclaimer</h4>
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
