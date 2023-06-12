import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { baseUrl } from '../apiConfig';
import { getHeaders } from '../authUtil';

function ArtistProfile() {
  const { artistId } = useParams();
  const [artist, setArtist] = useState(null);
  const [arts, setArts] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/api/users/${artistId}`,{headers: getHeaders()})
      .then(response => response.json())
      .then(data => setArtist(data))
      .catch(error => console.log(error));

    fetch(`${baseUrl}/api/arts/user/${artistId}`,{headers: getHeaders()})
      .then(response => response.json())
      .then(data => setArts(data))
      .catch(error => console.log(error));
  }, [artistId]);

  const handleCommissionRequest = () => {
    // Handle commission request logic
  };

  if (!artist) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Artist Profile: {artist.username}</h1>
     <img src={baseUrl+ artist.profile_picture} alt={artist.username} />
      <p>Email: {artist.email}</p>
      <p>Bio: {artist.bio}</p>
      <button onClick={handleCommissionRequest}>Request Commission</button>
      <h2>Arts by {artist.username}</h2>
      {arts.map(art => (
        <div key={art.id}>
          <h3>{art.title}</h3>
          <p>Description: {art.description}</p>
          <p>Price: ${art.price}</p>
          <img src={baseUrl+art.image} alt={art.title} />
        </div>
      ))}
    </div>
  );
}

export default ArtistProfile;
