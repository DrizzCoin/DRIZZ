import React, { useState, CSSProperties, FormEvent } from 'react';
import { supabase } from '../utils/supabaseClient';

export default function AdminUploadForm() {
  const [title, setTitle] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [publishedAt, setPublishedAt] = useState('');
  const [exclusive, setExclusive] = useState(false);
  const [message, setMessage] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage('');
    setUploading(true);

    if (!imageFile) {
      setMessage('❌ Please select an image to upload.');
      setUploading(false);
      return;
    }

    // Upload image to Supabase Storage
    const filePath = `${Date.now()}-${imageFile.name}`;
    const { error: uploadError } = await supabase.storage
      .from('comic-images')
      .upload(filePath, imageFile);

    if (uploadError) {
      setMessage(`❌ Upload failed: ${uploadError.message}`);
      setUploading(false);
      return;
    }

    const { data: publicUrlData } = supabase.storage
      .from('comic-images')
      .getPublicUrl(filePath);

    const imageUrl = publicUrlData?.publicUrl;

    // Insert into comics table
    const { error: insertError } = await supabase.from('comics').insert([
      {
        title,
        image_url: imageUrl,
        published_at: publishedAt ? new Date(publishedAt).toISOString() : null,
        exclusive,
      },
    ]);

    if (insertError) {
      setMessage(`❌ Error saving to database: ${insertError.message}`);
    } else {
      setMessage('✅ Comic uploaded successfully!');
      setTitle('');
      setImageFile(null);
      setPublishedAt('');
      setExclusive(false);
      (document.getElementById('imageInput') as HTMLInputElement).value = '';
    }

    setUploading(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={{ textAlign: 'center' }}>Upload New Comic</h2>

        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={inputStyle}
        />

        <label>Comic Image File:</label>
        <input
          type="file"
          id="imageInput"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files?.[0] ?? null)}
          required
          style={inputStyle}
        />

        <label>Published At (optional):</label>
        <input
          type="datetime-local"
          value={publishedAt}
          onChange={(e) => setPublishedAt(e.target.value)}
          style={inputStyle}
        />

        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5em', marginBottom: '15px' }}>
          <input
            type="checkbox"
            checked={exclusive}
            onChange={(e) => setExclusive(e.target.checked)}
          />
          Exclusive (Vault Only)
        </label>

        <button type="submit" style={buttonStyle} disabled={uploading}>
          {uploading ? 'Uploading...' : 'Upload Comic'}
        </button>
      </form>

      {message && <p style={{ marginTop: 10 }}>{message}</p>}
    </>
  );
}

const formStyle: CSSProperties = {
  maxWidth: 500,
  margin: '0 auto',
  color: '#fff',
};

const inputStyle: CSSProperties = {
  width: '100%',
  padding: '10px',
  marginBottom: '15px',
  borderRadius: '5px',
  border: 'none',
};

const buttonStyle: CSSProperties = {
  padding: '10px 20px',
  backgroundColor: '#1d4ed8',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  fontWeight: 'bold',
  cursor: 'pointer',
};
