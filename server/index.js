const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

// Sample endpoint: returns mock aircraft data
app.get('/api/planes', (req, res) => {
  res.json([
    {
      airline: 'Delta',
      registration: 'N12345',
      aircraft_model: 'Boeing 737',
      location: 'Near PDX',
      image_url: 'https://example.com/image.jpg',
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
