import React from 'react';

interface AdminComicCardProps {
  title: string;
  image: string;
  date: string;
  onDelete: () => void;
}

const AdminComicCard: React.FC<AdminComicCardProps> = ({ title, image, date, onDelete }) => {
  return (
    <div style={{ border: '2px solid #fff', padding: '1em', borderRadius: '10px', marginBottom: '1em' }}>
      <img src={image} alt={title} style={{ maxWidth: '100%' }} />
      <h3 style={{ color: '#fff' }}>{title}</h3>
      <p style={{ color: '#ccc' }}>{date}</p>
      <button
        onClick={onDelete}
        style={{ padding: '0.5em 1em', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
      >
        Delete
      </button>
    </div>
  );
};

export default AdminComicCard;
