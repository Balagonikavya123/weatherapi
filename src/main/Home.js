// import React from 'react';
// import myImage from './image.png'; // Adjust the path based on the actual location of your image
// import './style.css';

// export default function Home() {
//   return (
//     <div className="home-container">
//       <img src={myImage} alt="My Image" className="background-image" />
//     </div>
//   );
// }

import React from 'react';
import './style.css'; // Make sure to import your CSS file

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