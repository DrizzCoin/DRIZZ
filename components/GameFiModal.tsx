import React from 'react';

interface GameFiModalProps {
  onClose: () => void;
}

const GameFiModal: React.FC<GameFiModalProps> = ({ onClose }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000
      }}
    >
      <div
        style={{
          background: '#222',
          padding: '2rem',
          borderRadius: '12px',
          maxWidth: '90%',
          textAlign: 'center',
          color: '#fff'
        }}
      >
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>🚧 GameFi Coming Soon</h2>
        <p style={{ marginBottom: '1rem' }}>
          DRIZZVIA will test your knowledge, wit, and cultural fire. Stay tuned.
        </p>
        <button
          onClick={onClose}
          style={{
            padding: '0.5rem 1rem',
            background: '#1e3a8a',
            border: 'none',
            borderRadius: '8px',
            color: '#fff',
            cursor: 'pointer'
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default GameFiModal;
