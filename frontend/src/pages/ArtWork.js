import React, { useState, useEffect } from 'react';
import { baseUrl } from '../apiConfig.js';
import { getHeaders } from '../authUtil.js';
const Artwork = ({ match }) => {
  const [artwork, setArtwork] = useState(null);

  useEffect(() => {

    const fetchArtwork = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/arts/${match.params.id}/`,{headers: getHeaders()});
        if (response.ok) {
          const data = await response.json();
          setArtwork(data);
        } else {
          throw new Error('Failed to fetch artwork');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchArtwork();
  }, [match.params.id]);

  const addToCart = async () => {


    try {

      const response = await fetch(`${baseUrl}/api/arts/${artwork.id}/add-to-cart/`, {
        method: 'POST',
        headers: getHeaders()
      });
      if (response.ok) {
        // Handle success, e.g., show a success message
      } else {
        throw new Error('Failed to add to cart');
      }
    } catch (error) {
      console.error(error);
    }
  };

  // const 

  if (!artwork) {
    return <div>Loading artwork...</div>;
  }

  return (

    <div class="card m-auto mt-5" style={{ width: '27rem' }}>
      <img src={artwork.image} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{artwork.title}</h5>
        <br />
        <p class="card-text">Artist: Mihir</p>
        <p class="card-text">Description: {artwork.description}</p>
        <p class='card-text'>Price : {artwork.price}</p>
        <button
          className="btn btn-primary mt-3"
          onClick={addToCart}
          class="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};

export default Artwork;
