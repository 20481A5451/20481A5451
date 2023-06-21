const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Mock train data
const trains = [
  {
    id: 1,
    number: '123',
    departureTime: '10:00 AM',
    arrivalTime: '12:00 PM',
    delay: 10,
    seatAvailability: 'Available',
    trainClass: 'Economy',
    fare: '$50',
  },
  {
    id: 2,
    number: '456',
    departureTime: '2:00 PM',
    arrivalTime: '4:00 PM',
    delay: 0,
    seatAvailability: 'Sold Out',
    trainClass: 'Business',
    fare: '$100',
  },
  // Add more train objects as needed
];

// Route to get all trains
app.get('/api/trains', (req, res) => {
  res.json(trains);
});

// Route to get a specific train by ID
app.get('/api/trains/:id', (req, res) => {
  const trainId = parseInt(req.params.id);
  const train = trains.find((train) => train.id === trainId);
  
  if (!train) {
    return res.status(404).json({ error: 'Train not found' });
  }

  res.json(train);
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});