// pages/vault/comics.tsx
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

export default function VaultComics() {
  const [comics, setComics] = useState<Comic[]>([]);

  useEffect(() => {
    const fetchComics = async () => {
      const { data, error } = await supabase
        .from('comics')
        .select('*')
        .eq('exclusive', true)
        .gte('published_at', new Date(Date.now() - 28 * 24 * 60 * 60 * 1000).toISOString())
        .order('published_at', { ascending: false });

      if (error) {
        console.error('Error fetching vault comics:', error);
      } else {
        setComics(data || []);
      }
    };

    fetchComics();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#fff' }}>
        Vault Comics (Published in the Last 4 Weeks)
      </h1>
      <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        {comics.map((comic) => (
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
