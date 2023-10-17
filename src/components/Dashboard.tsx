import React from 'react';
import CarList from './CarList';


const Dashboard: React.FC = () => {
  const cars = [
    {
      id: 1,
      make: 'Toyota',
      model: 'Corolla',
      year: 2022,
    },
    {
      id: 2,
      make: 'Ford',
      model: 'Focus',
      year: 2011,
    },
    
  ];
  return (
    <div>
      <h1>Car Inventory Dashboard</h1>
      <CarList cars={cars} />
    </div>
  );
};
export default Dashboard;