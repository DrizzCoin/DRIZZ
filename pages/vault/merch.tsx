// pages/vault/merch.tsx
import { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabaseClient';
import Image from 'next/image';

interface Merch {
  id: number;
  title: string;
  price: number;
  description: string;
  product_url?: string;
  image_url: string;
  exclusive: boolean;
}

export default function VaultMerch() {
  const [items, setItems] = useState<Merch[]>([]);

  useEffect(() => {
    const fetchMerch = async () => {
      const { data, error } = await supabase
        .from('merch')
        .select('*')
        .eq('exclusive', true)
        .order('id', { ascending: false });

      if (error) {
        console.error('Error fetching merch:', error.message);
      } else {
        setItems(data || []);
      }
    };

    fetchMerch();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#fff' }}>Exclusive Vault Merch</h1>

      <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              backgroundColor: '#1f2937',
              padding: '1rem',
              borderRadius: '10px',
              textAlign: 'center',
              color: '#fff',
            }}
          >
            <Image
              src={item.image_url}
              alt={item.title}
              width={400}
              height={400}
              style={{ width: '100%', borderRadius: '6px' }}
            />
            <h2 style={{ margin: '1rem 0 0.5rem' }}>{item.title}</h2>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>${item.price.toFixed(2)}</p>
            <p style={{ fontSize: '0.9rem', color: '#ccc' }}>{item.description}</p>
            {item.product_url && (
              <a
                href={item.product_url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: '0.5rem', display: 'inline-block', color: '#3b82f6' }}
              >
                Buy Now
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
