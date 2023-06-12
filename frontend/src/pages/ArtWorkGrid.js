import React, { useEffect, useState } from 'react';
import { baseUrl } from '../apiConfig';
import { getHeaders } from '../authUtil';


function ArtworkList() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/api/arts/`, { headers: getHeaders() })
      .then(response => response.json())
      .then(data => setArtworks(data))
      .catch(error => console.log(error));
  }, []);

  // const addToCart = async (artworkId) => {
  //   const username = sessionStorage.getItem('username');
  //   const password = sessionStorage.getItem('password');

  //   try {
  //     const headers = new Headers();
  //     headers.set('Authorization', 'Basic ' + btoa(username + ':' + password));

  //     const response = await fetch(`${baseUrl}/api/arts/${artworkId}/add-to-cart/`, {
  //       method: 'POST',
  //       headers: headers
  //     });

  //     if (response.ok) {
  //       // Handle success, e.g., show a success message
  //       console.log('Artwork added to cart successfully');
  //     } else {
  //       throw new Error('Failed to add artwork to cart');
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <>
      <div class="row m-3">
        <h1 class='m-auto'>Artworks</h1>
        <br />
        {artworks.map(artwork => (
          <div class="col-sm-3 mb-3 mb-sm-0 mt-3">
            <div class="card" key={artwork.id}>
              <div class="card-body">
                <a href = {"/artwork/"+artwork.id}>
                <img src={artwork.image} alt={artwork.title} class="card-img-top" />
                </a>
                <h3 class="card-title">{artwork.title}</h3>
                <p class="card-text">Artist: {artwork.artist}</p>
                {/* <p class="card-text">Description: {artwork.description}</p> */}
                <p class="card-text">Price: ${artwork.price}</p>
                {/* <button
                  className="btn btn-primary mt-3"
                  onClick={addToCart}
                  class="btn btn-primary">Add to Cart
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ArtworkList;
