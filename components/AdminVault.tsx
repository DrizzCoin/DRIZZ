import React, { useEffect, useState } from 'react';
import AdminComicCard from '@/components/AdminComicCard';
import MerchCard from '@/components/MerchCard';

// Define the data types
interface Comic {
  title: string;
  image: string;
  date: string;
}

interface Merch {
  title: string;
  image: string;
  price: string;
}

const AdminVault = () => {
  const [comics, setComics] = useState<Comic[]>([]);
  const [merch, setMerch] = useState<Merch[]>([]);

  useEffect(() => {
    fetch('/api/comics')
      .then(res => res.json())
      .then(data => setComics(data));

    fetch('/api/merch')
      .then(res => res.json())
      .then(data => setMerch(data));
  }, []);

  const deleteComic = async (index: number) => {
    const updated = [...comics];
    updated.splice(index, 1);
    setComics(updated);
    await fetch('/api/comics', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated)
    });
  };

  const deleteMerch = async (index: number) => {
    const updated = [...merch];
    updated.splice(index, 1);
    setMerch(updated);
    await fetch('/api/merch', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated)
    });
  };

  return (
    <div style={{ padding: '2em', background: 'rgba(0,0,0,0.85)', color: '#fff' }}>
      <h2 style={{ textAlign: 'center' }}>🛠️ Admin Vault Manager</h2>

      <section style={{ marginTop: '2em' }}>
        <h3>🗃️ Archived Comics</h3>
        {comics.length === 0 ? (
          <p>No comics found.</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1em' }}>
            {comics.map((comic, index) => (
              <AdminComicCard
                key={index}
                title={comic.title}
                image={comic.image}
                date={comic.date}
                onDelete={() => deleteComic(index)}
              />
            ))}
          </div>
        )}
      </section>

      <section style={{ marginTop: '3em' }}>
        <h3>🧢 Exclusive Merch</h3>
        {merch.length === 0 ? (
          <p>No merch found.</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1em' }}>
            {merch.map((item, index) => (
              <MerchCard
                key={index}
                title={item.title}
                image={item.image}
                price={item.price}
                onDelete={() => deleteMerch(index)}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default AdminVault;
