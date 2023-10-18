// import React from 'react'

interface CarCardProps {
  car:{ 
    id: number,
    name:string,
    year: number,
};
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
    return(
      <div className="car">
        <h3>{car.year}</h3>
        <h3>{car.name}</h3>  
      </div>
    )
   }
 export default CarCard;
