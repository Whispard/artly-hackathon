import React, { useEffect, useState } from 'react';
import { baseUrl } from '../apiConfig';
import { getHeaders } from '../authUtil';

function ArtistList() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/api/users/list`, { headers: getHeaders() })
      .then(response => response.json())
      .then(data => {
        const artistList = data.filter(user => user.is_artist);
        setArtists(artistList);
      })
      .catch(error => console.log(error));
  }, []);

  //   if (!artists) {
  //     return <div>Loading artwork...</div>;
  //   }

  return (
    <>
      <div class="row m-3">
        <h1 class='m-auto'>Artworks</h1>
        <br />
        {artists.map(artist => (
          <div class="col-sm-3 mb-3 mb-sm-0 mt-3">
            <div class="card" key={artist.id}>
              <div class="card-body">
              <a href={"/artists/"+3+"/"}><img src={artist.profile_picture} alt={artist.username} class="card-img-top" />
              </a>
                <h3 class="card-text">{artist.username}</h3>
                <p class="card-text">Email: {artist.email}</p>
                <p class="card-text">Bio: {artist.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  // return (
  //   <div>
  //     <h1>Artists</h1>
  //     {artists.map(artist => (
  //       <div key={artist.username}>
          
  //         <a href={"/artists/"+3+"/"}> <img src={artist.profile_picture} alt={artist.username} />
  //         </a>
  //         <h2>{artist.username}</h2>
  //         {/* <p>Email: {artist.email}</p> */}
  //         {/* <p>Bio: {artist.bio}</p> */}
  //         <hr />
  //       </div>
  //     ))}
  //   </div>
  // );
}

export default ArtistList;
