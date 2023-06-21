import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    // Fetch train schedule data from your backend API
    axios.get('/api/train-schedule')
      .then(response => {
        setTrains(response.data);
      })
      .catch(error => {
        console.error('Error fetching train schedule:', error);
      });
  }, []);

  const getTrainStatus = (train) => {
    if (train.delay > 0) {
      return `Delayed by ${train.delay} minutes`;
    } else {
      return 'On time';
    }
  };

  const getTrainCost = (train) => {
    if (train.cost < 50) {
      return 'Cheap';
    } else if (train.cost > 200) {
      return 'Expensive';
    } else {
      return 'Moderate';
    }
  };

  return (
    <div>
      <h1>Train Schedule</h1>
      {trains.map(train => (
        <div key={train.id}>
          <h2>{train.name}</h2>
          <p>Departure Time: {train.departureTime}</p>
          <p>Arrival Time: {train.arrivalTime}</p>
          <p>Status: {getTrainStatus(train)}</p>
          <p>Cost: {getTrainCost(train)}</p>
          <p>Seat Availability: {train.seatAvailability}</p>
          <p>Coach Class: {train.coachClass}</p>
        </div>
      ))}
    </div>
  );
}

export default App;