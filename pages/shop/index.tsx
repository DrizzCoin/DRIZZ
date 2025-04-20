// pages/shop/index.tsx
import { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabaseClient';
import Image from 'next/image';

interface Merch {
  id: number;
  title: string;
  price: number;
  description: string;
  product_url: string;
  image_url: string;
  exclusive: boolean;
}

export default function PublicShop() {
  const [items, setItems] = useState<Merch[]>([]);

  useEffect(() => {
    const fetchMerch = async () => {
      const { data, error } = await supabase
        .from('merch')
        .select('*')
        .eq('exclusive', false)
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
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#fff' }}>
        Public Shop
      </h1>

      <div
        style={{
          display: 'grid',
          gap: '1.5rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        }}
      >
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
            <h2 style={{ marginBottom: '0.5rem' }}>{item.title}</h2>
            <Image
              src={item.image_url}
              alt={item.title}
              width={400}
              height={400}
              style={{ width: '100%', borderRadius: '6px' }}
            />
            <p style={{ margin: '1rem 0 0.5rem' }}>
              <strong>${item.price.toFixed(2)}</strong>
            </p>
            <p style={{ fontSize: '0.9rem', color: '#ccc' }}>{item.description}</p>
            {item.product_url && (
              <button
                style={{
                  marginTop: '0.5rem',
                  display: 'inline-block',
                  backgroundColor: '#3b82f6',
                  color: '#fff',
                  padding: '10px 16px',
                  borderRadius: '5px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  border: 'none',
                }}
                onClick={async () => {
                  try {
                    await supabase.from('merch_clicks').insert({
                      item_title: item.title,
                      product_url: item.product_url,
                      source_page: '/shop',
                    });
                  } catch (err) {
                    console.error('Failed to log merch click:', err);
                  }
                  window.open(item.product_url, '_blank');
                }}
              >
                Buy Now
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
