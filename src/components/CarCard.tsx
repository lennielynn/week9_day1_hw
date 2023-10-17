// import React from 'react'

interface CarCardProps {
  car:{ 
    id: number,
    make: string,
    model: string
    year: number,
};
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
    return(
      <div>
        <h3>{car.make}</h3>
        <h3>{car.model}</h3>
        <h3>{car.year}</h3>
      </div>
    )
   }
 export default CarCard;
