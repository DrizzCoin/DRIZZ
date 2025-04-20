import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function VaultLoadingScreen({ onComplete }: { onComplete: () => void }) {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      onComplete();
    }, 10000); // 10s duration of video

    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'black',
      }}
    >
      <video
        src="/videos/inspirational-loading.mp4"
        autoPlay
        muted
        playsInline
        onEnded={onComplete}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      {/* Black box to mask OpenAI logo area in lower right */}
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          width: '80px',
          height: '40px',
          backgroundColor: 'black',
          borderRadius: '5px',
        }}
      />
    </div>
  );
}
