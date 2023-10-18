import CarCard from "./CarCard"; 


export interface CarListProps {
    cars:{ 
        id: number,
        name:string,
        year: number,
    }[]
}

  
export default function CarList({ cars }: CarListProps){ 
    return(
        cars.map((car) => (
            <CarCard key={car.id} car={car}/>
          ))
    )
}  