// pages/vault/archives.tsx
import { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabaseClient';
import Image from 'next/image';

interface Comic {
  id: number;
  title: string;
  image_url: string;
  published_at: string;
  exclusive: boolean;
}

export default function VaultArchives() {
  const [archives, setArchives] = useState<Comic[]>([]);

  useEffect(() => {
    const fetchArchives = async () => {
      const { data, error } = await supabase
        .from('comics')
        .select('*')
        .eq('exclusive', true)
        .lt('published_at', new Date(Date.now() - 28 * 24 * 60 * 60 * 1000).toISOString())
        .order('published_at', { ascending: false });

      if (error) {
        console.error('Error fetching archive comics:', error);
      } else {
        setArchives(data || []);
      }
    };

    fetchArchives();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#fff' }}>
        Archived Vault Comics (Older than 4 Weeks)
      </h1>
      <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        {archives.map((comic) => (
          <div key={comic.id} style={{ backgroundColor: '#1f2937', borderRadius: '10px', padding: '1rem' }}>
            <h2 style={{ color: '#fff', marginBottom: '0.5rem' }}>{comic.title}</h2>
            <Image
              src={comic.image_url}
              alt={comic.title}
              width={500}
              height={700}
              style={{ width: '100%', borderRadius: '6px' }}
            />
            <p style={{ color: '#ccc', marginTop: '0.5rem' }}>
              Published: {new Date(comic.published_at).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
