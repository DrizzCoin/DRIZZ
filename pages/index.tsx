// pages/index.tsx
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import ComicViewer from '@/components/ComicViewer';
import DrizzStatsLive from '@/components/DrizzStatsLive';
import GameFiModal from '@/components/GameFiModal';
import DogmaModal from '@/components/DogmaModal';
import { useWallet } from '@solana/wallet-adapter-react';

const FORM_ACTION_URL = process.env.NEXT_PUBLIC_FORM_SUBMIT_URL || "";

export default function Home() {
  const [showDogma, setShowDogma] = useState(false);
  const [showGameFi, setShowGameFi] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // This ensures the code below only runs on client
  }, []);

  if (!isClient) return null; // Optional: add loading here

  // ✅ Now it's safe to call useWallet
  const { connect, publicKey } = useWallet();

  return (
    <>
      <Head>
        <title>WWDD - What Would Drizz Do</title>
        <meta name="description" content="The official DRIZZ token site." />
      </Head>

      <video
        autoPlay
        muted
        loop
        playsInline
        className="background-video"
      >
        <source src="/videos/bg-map.webm" type="video/webm" />
        <source src="/videos/bg-map.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <main className="main-wrapper" style={{ fontFamily: 'Oswald, sans-serif', color: '#fff', textAlign: 'center', paddingBottom: '4em' }}>
      <header
        style={{
          padding: '1em 0.5em',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          background: '#111',
          zIndex: 1000,
          width: '100%',
        }}
      >
        <h1
          style={{
            fontSize: '2em',
            marginBottom: '0.5em',
            color: '#fff',
            textAlign: 'center',
            lineHeight: 1.2,
          }}
        >
          WWDD - What Would Drizz Do
        </h1>
      
        {/* Navigation */}
        <nav
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1em',
            fontSize: '1rem',
            width: '100%',
            maxWidth: '900px',
          }}
        >
          {[
            { label: 'About Us', href: '#about-section' },
            { label: 'Join Us', href: '#join-section' },
            { label: 'Shop 🛒', href: '/shop', isLink: true },
            { label: 'GameFi', href: '#', onClick: () => setShowGameFi(true) },
            { label: 'Disclaimer', href: '#disclaimer-section' },
          ].map(({ label, href, isLink, onClick }) =>
            isLink ? (
              <Link
                key={label}
                href={href}
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  transition: 'color 0.3s, text-shadow 0.3s',
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = '#4f83ff';
                  target.style.textShadow = '0 0 6px #4f83ff';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = '#fff';
                  target.style.textShadow = 'none';
                }}                
              >
                {label}
              </Link>
            ) : (
              <a
                key={label}
                href={href}
                onClick={onClick}
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  cursor: onClick ? 'pointer' : 'default',
                  transition: 'color 0.3s, text-shadow 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#4f83ff';
                  e.target.style.textShadow = '0 0 6px #4f83ff';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#fff';
                  e.target.style.textShadow = 'none';
                }}
              >
                {label}
              </a>
            )
          )}
      
          {/* GitHub link */}
          <a
  href="https://github.com/DrizzCoin/DRIZZ"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.25em',
    color: '#fff',
    textDecoration: 'none',
    transition: 'color 0.3s, text-shadow 0.3s',
  }}
  onMouseEnter={(e) => {
    const target = e.target as HTMLElement;   // ✅ Fix
    target.style.color = '#4f83ff';
    target.style.textShadow = '0 0 6px #4f83ff';
  }}
  onMouseLeave={(e) => {
    const target = e.target as HTMLElement;   // ✅ Fix
    target.style.color = '#fff';
    target.style.textShadow = 'none';
  }}
>
  <img
    src="/images/github-logo.png"
    alt="GitHub"
    width={18}
    height={18}
    style={{
      display: 'inline-block',
      verticalAlign: 'middle',
    }}
  />
  <span>GitHub</span>
</a>
        </nav>
          <button
            onClick={() => setShowDogma(true)}
            style={{
              padding: '10px 20px',
              background: 'linear-gradient(90deg, #1e3a8a, #2563eb)',
              color: '#fff',
              border: 'none',
              borderRadius: '10px',
              boxShadow: '0px 4px 6px rgba(0,0,0,0.85)',
              fontSize: '1em',
              cursor: 'pointer',
              marginTop: '10px'
            }}
          >
            View DRIZZ Dogma
          </button>
          <div style={{ position: 'absolute', right: '20px', top: '20px' }}>
            <button
              id="header-wallet-button"
              style={{
                position: 'absolute',
                right: '20px',
                top: '20px',
                backgroundColor: '#f5b84b',
                color: '#000',
                padding: '0.5em 1.2em',
                borderRadius: '8px',
                fontSize: '.75em',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'background 0.3s'
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#d4a373')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#f5b84b')}
            >
              Connect Wallet
            </button>
          </div>
        </header>

        <section
          id="about-section"
          style={{
            padding: '4em',
            background: 'rgba(0, 0, 0, 0.85)',
            borderRadius: '0',
            maxWidth: '500px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              color: '#fff',
              fontSize: '1.5em',
              fontWeight: 'bold',
              marginBottom: '1em',
            }}
          >
            About Us
          </h2>
          <p style={{ fontSize: '1em', color: '#fff' }}>
            DRIZZ was created as a symbol for those who don't{' '}
            <a
              href="https://www.dictionary.com/browse/capitulate"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#d4a373',
                fontWeight: 'bold',
                textDecoration: 'none',
              }}
            >
              capitulate.
            </a>
          </p>
          <img
            src="/images/Designer.png"
            alt="WWDD Coin"
            style={{ width: '450px', margin: '2em auto', display: 'block' }}
          />
          <p
            style={{
              fontFamily: 'Oswald, sans-serif',
              fontSize: '1.2em',
              fontStyle: 'italic',
              color: '#fff',
              textShadow: '2px 2px 4px rgba(0,0,0,0.85)',
              marginTop: '2em',
            }}
          >
            <strong>You Either Stand for Something or Fall for Anything</strong>
          </p>
        </section>

        <section
  id="why-drizz"
  style={{
    background: 'rgba(0,0,0,0.85)',
    padding: '3rem 2rem',
    margin: '2rem auto',
    maxWidth: '565px',
    borderRadius: '0',
    textAlign: 'center'
  }}
>
  <h2 style={{ color: '#fff', fontSize: '1.75em', fontWeight: 'bold', marginBottom: '1em' }}>
    Why DRIZZ?
  </h2>

  <p style={{ color: '#fff', fontSize: '1em', marginBottom: '0.5em' }}>
    This project is more than a memecoin—it’s a stand for the 340 million.
  </p>
  <p style={{ color: '#fff', fontSize: '1em', marginBottom: '0.5em' }}>
    Fight Tyranny. Fight Authoritarism. Fight Autocracy
  </p>
  <p
    style={{
      fontFamily: 'Oswald, sans-serif',
      fontSize: '1.5em',
      fontWeight: 'bold',
      color: '#fff',
      textShadow: '2px 2px 4px rgba(0,0,0,0.99)',
      marginBottom: '1.5em'
    }}
  >
    F--- Off Oligarchs
  </p>

  <a
  href="https://tools.smithii.io/launch/DRIZZ:-Don%E2%80%99t-Get-Left"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: 'inline-block',
    backgroundColor: '#2563eb',
    color: '#fff',
    padding: '0.75em 1.5em',
    fontSize: '1em',
    fontWeight: 'bold',
    borderRadius: '10px',
    textDecoration: 'none',
    boxShadow: '0px 4px 6px rgba(0,0,0,0.2)',
    transition: 'background-color 0.3s'
  }}
  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#1e3a8a')}
  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}
>
  Join the Movement
</a>

  <div style={{ marginTop: '.85rem' }}>
  <DrizzStatsLive />
</div>

</section>

<section
  id="viewer-section"
  style={{
    background: 'rgba(0,0,0,0.85)',
    padding: '2em',
    margin: '2em auto',
    borderRadius: '0',
    maxWidth: '575px',
    textAlign: 'center',
  }}
>
  <ComicViewer />
</section>


        <section id="connect" style={{ padding: '2rem 1rem', background: '#000' }}>
          <h2>Connect with Us</h2>
          <p>Follow us for the latest updates and announcements:</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <a href="https://x.com/DRIZZ_WWDD" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
              <Image src="/images/x-logo.png" alt="Twitter" width={20} height={20} /> Twitter
            </a>
            <a href="https://www.instagram.com/drizz_wwdd/" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
            <Image src="/images/instagram-logo.png" alt="Instagram" width={20} height={20} /> Instagram
            </a>
            <a href="https://www.tiktok.com/@drizz_wwdd" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
            <Image src="/images/tiktok-logo.png" alt="TikTok" width={20} height={20} /> TikTok
            </a>
            <a href="https://www.youtube.com/@DRIZZ_WWDD" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
              <Image src="/images/youtube-logo.png" alt="YouTube" width={20} height={20} /> Youtube
            </a>
          </div>
        </section>

        <section id="contact" style={{ padding: '2rem 1rem', background: 'rgba(0, 0, 0, 0.85)', borderRadius: '10px', margin: '2rem auto', maxWidth: '700px' }}>
          <h2>Contact DRIZZ</h2>
          <p>Questions, feedback, or ideas? Shoot us a message below.</p>
          <form
            action="https://formsubmit.co/support@drizz.io"
            method="POST"
            style={{ maxWidth: '400px', margin: '20px auto' }}
        >

            <input type="text" name="_honey" style={{ display: 'none' }} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="/thank-you.html" />

            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required style={inputStyle} />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required style={inputStyle} />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={6} required style={inputStyle}></textarea>
            <button type="submit" style={buttonStyle}>Send</button>
          </form>
        </section>

        <section id="disclaimer-section" style={{ padding: '2rem 1rem', background: 'rgba(0,0,0,0.85)', borderRadius: '10px', margin: '2rem auto', maxWidth: '700px' }}>
          <h2 style={{ color: '#d4a373', fontSize: '2em' }}>Legal Disclaimer</h2>
          <p style={{ fontSize: '.75em', color: '#ccc' }}>
            DRIZZ is not affiliated with or endorsed by any government agency or individual. Participation involves risk. Please consult legal or financial professionals before proceeding.
          </p>
        </section>

        <footer style={{ textAlign: 'center', background: '#111', padding: '2rem 1rem', color: '#fff' }}>
  <p>© 2025 WWDD. Built on Solana. All rights reserved.</p>

  <div style={{ marginTop: '1rem' }}>
    <a
      href="/terms-of-service.html"
      style={{
        display: 'inline-block',
        padding: '10px 20px',
        background: '#d4a373',
        color: '#000',
        fontWeight: 'bold',
        textDecoration: 'none',
        borderRadius: '8px',
        marginRight: '10px'
      }}
    >
      View Terms of Service
    </a>

    <a
      href="/docs/DRIZZ_Tokenomics%20_Utility_Overview.html"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-block',
        padding: '10px 20px',
        background: '#d4a373',
        color: '#000',
        fontWeight: 'bold',
        textDecoration: 'none',
        borderRadius: '8px'
      }}
    >
      Tokenomics
    </a>
  </div>
</footer>

        {showGameFi && <GameFiModal onClose={() => setShowGameFi(false)} />}
        {showDogma && <DogmaModal onClose={() => setShowDogma(false)} />}
      </main>
    </>
  );
}

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '15px',
  borderRadius: '5px',
  border: 'none'
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#1d4ed8',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  fontWeight: 'bold',
  cursor: 'pointer'
};

const socialLinkStyle = {
  color: '#3b82f6',
  margin: '0.5em 0',
  display: 'inline-block',
  textDecoration: 'none',
  fontWeight: 'bold'
};
// trigger redeploy
