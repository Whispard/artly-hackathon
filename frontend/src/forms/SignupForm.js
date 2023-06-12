import React, { useState } from 'react';
import { baseUrl } from '../apiConfig';

function SignUpForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [bio, setBio] = useState('');
  const [isArtist, setIsArtist] = useState(false);
  const [commissionRate, setCommissionRate] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('profile_picture', profilePicture);
    formData.append('bio', bio);
    formData.append('is_artist', isArtist);
    formData.append('commission_rate', commissionRate);

    try {
      const response = await fetch(`${baseUrl}/api/users/create/`, {
        method: 'POST',
        // 'Content-Type': 'multipart/form-data',
        // headers: {
        //   ,
        // },
        body: formData,
      });

      if (response.ok) {
        // Sign-up successful, store username and password in sessionStorage
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('password', password);

        // Handle success, e.g., redirect to the home page
        console.log('Sign-up successful');
      } else {
        throw new Error('Failed to sign up');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div class='m-auto p-4' style={{ maxWidth: '30rem' }}>
      <h1 class='mb-3'>Sign Up</h1>
      <form onSubmit={handleSignUp} encType="multipart/form-data">
        <div class="input-group m-1" style={{ display: 'flex', justifyContent: "center" }}>
          <span class="input-group-text">Username</span>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} class="form-control"
          />
        </div>
        <br />
        <div class="input-group m-1" style={{ display: 'flex', justifyContent: "center" }}>
          <span class="input-group-text">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} class="form-control"
          />
        </div>
        <br />
        <div class="input-group m-1" style={{ display: 'flex', justifyContent: "center" }}>
          <span class="input-group-text">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} class="form-control"
          />
        </div>

        <br />
        <div class="input-group m-1" style={{ display: 'flex', justifyContent: "center" }}>
          <span class="input-group-text">Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            class="form-control"
          />
        </div>
        <br />
        <div class="input-group m-1" style={{ display: 'flex', justifyContent: "center" }}>
          <span class="input-group-text" style={{ marginRight: '1rem' }}>Profile Picture</span>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => { setProfilePicture(e.target.files[0]); console.log(e.target.files[0]) }}
            class="form-control"
          />
        </div>

        <br />
        <div class="input-group m-1" style={{ display: 'flex', justifyContent: "center" }}>
          <span class="input-group-text">Bio</span>
          <input
            type="text"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            class="form-control"
          />
        </div>
        <br />
        <div class="input-group m-1" style={{ display: 'flex', justifyContent: "center" }}>
          <span class="input-group-text">Is Artist</span>
          <input
            type="checkbox"
            checked={isArtist}
            onChange={(e) => setIsArtist(e.target.checked)}
            class="form-control"
          />
        </div>

        <br />
        <div class="input-group m-1" style={{ display: 'flex', justifyContent: "center" }}>
          <span class="input-group-text">Commission Rate</span>
          <input
            type="text"
            value={commissionRate}
            onChange={(e) => setCommissionRate(e.target.value)}
            class="form-control"
          />
        </div>
        <br />
        <div class="input-group m-4" style={{ maxWidth: '30rem', display: 'flex', justifyContent: "center" }}>
          <button type="submit" class=" m-auto btn btn-primary" >Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
