import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ArtDetail from './ArtDetail';
import './Dashboard.css';
const Dashboard = () => {
  const arts = [
    {
      id: 1,
      title: 'Artwork 1',
      image: 'artwork1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'Artwork 2',
      image: 'artwork2.jpg',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    },
    // Add more artworks as needed
  ];

  return (
    <Router>
      <div>
        <h1>Art Gallery</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
          <Route exact path="/">
            <h2>Welcome to the Home Page</h2>
          </Route>
          <Route exact path="/dashboard">
            <div>
              <h2>Art Dashboard</h2>
              {arts.map((art) => (
                <div key={art.id} className="art-item">
                  <img src={art.image} alt={art.title} />
                  <h3>{art.title}</h3>
                  <p>{art.description}</p>
                  <Link to={`/dashboard/${art.id}`}>View Details</Link>
                </div>
              ))}
            </div>
          </Route>
          <Route path="/dashboard/:id">
            <ArtDetail arts={arts} />
          </Route>
      </div>
    </Router>
  );
};

export default Dashboard;
