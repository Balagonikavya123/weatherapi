import React from 'react';
import './home.css'; // Make sure to import your CSS file

export default function Home() {
  return (
    <div className="home-container">
      <video autoPlay loop muted className="background-video">
        <source src={require('./live.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
 </div>
);
}