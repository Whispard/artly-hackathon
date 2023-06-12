import React, { useState } from 'react';
import { baseUrl } from '../apiConfig';
import { getHeaders } from '../authUtil';

const CreateArtForm = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState(3);
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    setArtist(3);
    formData.append('title', title);
    formData.append('artist', artist);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('image', image);
    console.log(formData)

    fetch(`${baseUrl}/api/arts/create/`, {
      method: 'POST',
      body: formData,
      headers: getHeaders(),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Art created successfully:', data);
        // Do something with the response, e.g., update the UI or show a success message
      })
      .catch(error => {
        console.error('Error creating art:', error);
        // Handle the error gracefully, e.g., display an error message to the user
      });
  };

  return (
    <form className='m-auto mt-3' onSubmit={handleSubmit} style={{ maxWidth: '30rem' }}>
      <div class="input-group m-3" style={{ display: 'flex', justifyContent: "center" }}>
        <span class="input-group-text">Title</span>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)}
          class="form-control"
        />
      </div>

      <br />

      <div class="input-group m-3" style={{ display: 'flex', justifyContent: "center" }} hidden>
        <span class="input-group-text">Artist</span>
        <input type="text" value={artist} onChange={e => setArtist(e.target.value)}
          class="form-control"
        />
      </div>
      <br />

      <div class="input-group m-3" style={{ display: 'flex', justifyContent: "center" }}>
        <span class="input-group-text">Description</span>
        <textarea value={description} onChange={e => setDescription(e.target.value)}
          class="form-control"
        />
      </div>
      <br />

      <div class="input-group m-3" style={{ display: 'flex', justifyContent: "center" }}>
        <span class="input-group-text">Price</span>
        <input type="number" value={price} onChange={e => setPrice(e.target.value)}
          class="form-control"
        />
      </div>
      <br />

      <div class="input-group m-3" style={{ display: 'flex', justifyContent: "center" }}>
        <span class="input-group-text" style={{ marginRight: '5%' }}>Image</span>
        <input type="file" accept="image/*" onChange={e => setImage(e.target.files[0])}
          class="form-control"
        />
      </div>
      <br />
      <div className="input-group m-4" style={{ maxWidth: '30rem', display: 'flex', justifyContent: "center" }}>
        <button type="submit" class=" m-auto btn btn-primary" style={{ maxWidth: '10rem' }}>Create Art</button>
      </div>
    </form>
  );
};

export default CreateArtForm;
