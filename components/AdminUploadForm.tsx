import React, { useState } from 'react';

const AdminUploadForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newComic = {
      title,
      imageUrl,
      date
    };

    const res = await fetch('/api/comics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newComic)
    });

    if (res.ok) {
      alert('Comic added!');
      setTitle('');
      setImageUrl('');
      setDate('');
    } else {
      alert('Failed to upload comic');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '1em', background: '#111', borderRadius: '12px' }}>
      <h3>Add New Comic</h3>
      <input
        type="text"
        placeholder="Comic Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ margin: '0.5em', padding: '0.5em', width: '100%' }}
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        style={{ margin: '0.5em', padding: '0.5em', width: '100%' }}
        required
      />
      <input
        type="text"
        placeholder="Date (e.g., 01/01/2025)"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{ margin: '0.5em', padding: '0.5em', width: '100%' }}
        required
      />
      <button
        type="submit"
        style={{ padding: '0.5em 1em', background: '#28a745', color: '#fff', border: 'none', borderRadius: '6px' }}
      >
        Upload Comic
      </button>
    </form>
  );
};

export default AdminUploadForm;
