import React, { useEffect, useState } from 'react';

function App() {
  const [planes, setPlanes] = useState([]);

  useEffect(() => {
    fetch('https://your-backend-url.onrender.com/api/planes')
      .then(res => res.json())
      .then(setPlanes)
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Nearby Aircraft</h1>
      {planes.map((plane, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <p><strong>Airline:</strong> {plane.airline}</p>
          <p><strong>Model:</strong> {plane.aircraft_model}</p>
          <p><strong>Registration:</strong> {plane.registration}</p>
          <p><strong>Location:</strong> {plane.location}</p>
          <img src={plane.image_url} alt="Aircraft" style={{ maxWidth: '300px' }} />
        </div>
      ))}
    </div>
  );
}

export default App;
