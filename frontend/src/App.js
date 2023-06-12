import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import './App.css'
import ArtForm from './forms/ArtForm';
import LoginForm from './forms/loginForm';
import Artwork from './pages/ArtWork';
import ArtworkList from './pages/ArtWorkGrid';
import CartComponent from './pages/Cart';
import SignUpForm from './forms/SignupForm';
import ArtistList from './pages/listUsers';
import ArtistProfile from './pages/artist';


const App = () => {
  // const [flag, setFlag] = useState(false);
  return (
    <Router>

      <div>
        <Route exact path="/">
          <h4 class="p-3 m-3">Welcome to the Home Page</h4>
          < ArtworkList />
        </Route>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/signup" component={SignUpForm} />
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        {/* <Route path="/artworks" component={ArtworkList} /> */}

        <Route exact path="/artwork/:id" component={Artwork} />
        <Route exact path="/cart" component={CartComponent} />
        <Route exact path="/artists" component={ArtistList} />
        <Route exact path="/artists/:artistId" component={ArtistProfile} />
        <Route exact path="/add-art" component={ArtForm} />

      </div>
    </Router>
  );
};

export default App;
