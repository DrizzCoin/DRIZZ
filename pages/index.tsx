// pages/index.tsx
import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import DrizzStatsLive from '@/components/DrizzStatsLive';
import ComicViewer from '@/components/ComicViewer';
import ComicGrid from '@/components/ComicGrid';
import DrizzVerificationBanner from '@/components/DrizzVerificationBanner';
import { useState } from 'react';
import DogmaModal from '@/components/DogmaModal';
import dynamic from 'next/dynamic';

const WalletMultiButtonDynamic = dynamic(
  () => import('@solana/wallet-adapter-react-ui').then((mod) => mod.WalletMultiButton),
  { ssr: false }
);

export default function Home() {
  const [showDogma, setShowDogma] = useState(false);

  return (
    <>
      <Head>
        <title>WWDD - What Would Drizz Do</title>
        <meta name="description" content="DRIZZ Memecoin Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1
        }}
      >
        <source src="/bg-map.webm" type="video/webm" />
        <source src="/bg-map.mp4" type="video/mp4" />
      </video>

      <main className="main-wrapper" style={{
        fontFamily: 'Oswald, sans-serif',
        color: '#fff',
        textAlign: 'center',
        paddingBottom: '4em'
      }}>
        <header style={{
          padding: '1em 0',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative'
        }}>
          <h1 style={{ fontSize: '2.2em', marginBottom: '0.2em' }}>
            WWDD - What Would Drizz Do
          </h1>
          <nav>
            <a href="#about-section" style={{ margin: '0 1em', color: '#fff' }}>About Us</a>
            <a href="#join-section" style={{ margin: '0 1em', color: '#fff' }}>Join Us</a>
            <a href="#shop-section" style={{ margin: '0 1em', color: '#fff' }}>Shop 🛒</a>
            <a href="#disclaimer-section" style={{ margin: '0 1em', color: '#fff' }}>Disclaimer</a>
          </nav>
          <div style={{ position: 'absolute', right: '20px', top: '20px' }}>
            <WalletMultiButtonDynamic />
          </div>
          <div style={{ marginTop: '1em' }}>
            <button
              onClick={() => setShowDogma(true)}
              style={{
                padding: '10px 20px',
                background: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '10px',
                boxShadow: '0px 4px 6px rgba(0,0,0,0.2)',
                fontSize: '1em',
                fontWeight: 600,
                cursor: 'pointer'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = '#0069d9'}
              onMouseOut={(e) => e.currentTarget.style.background = '#007bff'}
            >
              View DRIZZ Dogma
            </button>
          </div>
        </header>

        <section id="about-section" style={{ background: 'rgba(0, 0, 0, 0.85)', padding: '4em', maxWidth: '900px', margin: '0 auto' }}>
          <Image 
            src="/drizz-coin.png" 
            alt="DRIZZ Coin Hero" 
            width={420} 
            height={420} 
            priority 
            style={{ margin: '1em auto' }}
          />
          <h2>About Us</h2>
          <p style={{ fontSize: '1.2em' }}>DRIZZ was created as a symbol for those who don't <a href="https://www.dictionary.com/browse/capitulate" target="_blank" style={{ color: '#d4aa73', fontWeight: 'bold', textDecoration: 'none' }}>capitulate</a>.</p>
          <p style={{ fontSize: '1.5em', fontStyle: 'italic', color: '#fff', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}><strong>You Either Stand for Something or Fall for Anything</strong></p>
        </section>

        {showDogma && <DogmaModal onClose={() => setShowDogma(false)} />}
      </main>
    </>
  );
}
