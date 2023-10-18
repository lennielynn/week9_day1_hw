import  { useState, useEffect } from 'react';
import CarList from './CarList';


export default function Dashboard() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    async function getCars() {
      try {
        const res = await fetch('https://my-json-server.typicode.com/Llang8/cars-api/cars', {
          method: 'GET'
        });
        if (res.ok) {
          const data = await res.json();
          setCars(data);
        } else {
          window.alert('Bad request');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getCars();
  }, []);
  return (
    <div>
      <CarList cars={cars} />
    </div>
  );
}