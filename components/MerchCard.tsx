import React from 'react';

interface MerchCardProps {
  title: string;
  image: string;
  price: string;
  onDelete: () => void;
}

const MerchCard: React.FC<MerchCardProps> = ({ title, image, price, onDelete }) => {
  return (
    <div style={{ border: '2px solid #fff', padding: '1em', borderRadius: '10px', marginBottom: '1em', textAlign: 'center' }}>
      <img src={image} alt={title} style={{ maxWidth: '100%', borderRadius: '10px' }} />
      <h3 style={{ color: '#fff' }}>{title}</h3>
      <p style={{ color: '#ccc' }}>{price}</p>
      <button 
        onClick={onDelete}
        style={{ padding: '0.5em 1em', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
      >
        Delete
      </button>
    </div>
  );
};

export default MerchCard;
