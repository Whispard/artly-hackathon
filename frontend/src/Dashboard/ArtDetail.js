import React from 'react';
import { useParams } from 'react-router-dom';
import './ArtDetail.css'

const ArtDetail = ({ arts }) => {
  const { id } = useParams();
  const art = arts.find((art) => art.id.toString() === id);

  if (!art) {
    return <div>Artwork not found</div>;
  }

  return (
    <div className="art-item">
      <img src={art.image} alt={art.title} />
      <h3>{art.title}</h3>
      <p>{art.description}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ArtDetail;
