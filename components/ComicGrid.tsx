import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';

interface Comic {
  id: number;
  title: string;
  image_url: string;
  published_at?: string;
  exclusive: boolean;
}

export default function ComicViewer() {
  const [comics, setComics] = useState<Comic[]>([]);

  useEffect(() => {
    const fetchComics = async () => {
      const { data, error } = await supabase
        .from('comics')
        .select('*')
        .eq('exclusive', false)
        .order('published_at', { ascending: false });

      if (error) console.error('Error fetching comics:', error);
      else setComics(data || []);
    };

    fetchComics();
  }, []);

  return (
    <div>
      <h2>Public Comics</h2>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {comics.map((comic) => (
          <div key={comic.id}>
            <img src={comic.image_url} alt={comic.title} style={{ width: '100%' }} />
            <h3>{comic.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
