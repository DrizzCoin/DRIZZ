// components/AdminMerchUploadForm.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { supabase } from '@/utils/supabaseClient';
import { v4 as uuidv4 } from 'uuid';

export default function AdminMerchUploadForm() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [productUrl, setProductUrl] = useState('');
  const [exclusive, setExclusive] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImageFile(file);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!imageFile) return setMessage('❌ Please select an image.');

    setUploading(true);
    setMessage('Uploading...');

    const fileExt = imageFile.name.split('.').pop();
    const fileName = `${uuidv4()}.${fileExt}`;
    const filePath = `${fileName}`;

    // Upload image to Supabase Storage
    const { error: uploadError } = await supabase.storage
      .from('merch-images')
      .upload(filePath, imageFile);

    if (uploadError) {
      console.error('Upload error:', uploadError.message);
      setMessage(`❌ Upload failed: ${uploadError.message}`);
      setUploading(false);
      return;
    }

    const imageUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/merch-images/${filePath}`;

    // Insert merch item into database
    const { error: insertError } = await supabase.from('merch').insert([
      {
        title,
        price: parseFloat(price),
        description,
        product_url: productUrl || null,
        exclusive,
        image_url: imageUrl,
      },
    ]);

    if (insertError) {
      console.error('Insert error:', insertError.message);
      setMessage(`❌ Save failed: ${insertError.message}`);
    } else {
      setMessage('✅ Merch item uploaded!');
      setTitle('');
      setPrice('');
      setDescription('');
      setProductUrl('');
      setExclusive(false);
      setImageFile(null);
    }

    setUploading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 600, margin: '0 auto', color: '#fff' }}>
      <h2 style={{ textAlign: 'center' }}>Upload New Merch</h2>

      <label>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required style={inputStyle} />

      <label>Price (USD):</label>
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required style={inputStyle} />

      <label>Description:</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} required style={inputStyle} />

      <label>Product URL (optional):</label>
      <input type="url" value={productUrl} onChange={(e) => setProductUrl(e.target.value)} style={inputStyle} />

      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5em', marginBottom: '15px' }}>
        <input type="checkbox" checked={exclusive} onChange={(e) => setExclusive(e.target.checked)} />
        Exclusive (Vault Only)
      </label>

      <label>Image File:</label>
      <input type="file" accept="image/*" onChange={handleFileChange} style={inputStyle} />

      <button type="submit" disabled={uploading} style={buttonStyle}>
        {uploading ? 'Uploading...' : 'Upload Merch'}
      </button>

      {message && <p style={{ marginTop: 10 }}>{message}</p>}
    </form>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px',
  marginBottom: '15px',
  borderRadius: '5px',
  border: 'none',
};

const buttonStyle: React.CSSProperties = {
  padding: '10px 20px',
  backgroundColor: '#16a34a',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  fontWeight: 'bold',
  cursor: 'pointer',
};
