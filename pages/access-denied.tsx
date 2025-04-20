import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function AccessDenied() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#000',
        color: '#fff',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <Head>
        <title>Access Denied | DRIZZ</title>
      </Head>

      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Access Denied</h1>
      <p style={{ fontSize: '1.1rem', maxWidth: '600px', marginBottom: '2rem' }}>
        You must hold at least <strong>250 DRIZZ tokens</strong> in your wallet to access this exclusive content.
        Please connect a wallet with sufficient balance or acquire more DRIZZ to continue.
      </p>

      <Link href="/">
        <button
          style={{
            backgroundColor: '#2563eb',
            color: '#fff',
            padding: '0.75rem 1.5rem',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          Return to Homepage
        </button>
      </Link>
    </div>
  );
}
