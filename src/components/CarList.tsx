import CarCard from "./CarCard"; 


interface CarListProps {
    cars:{ 
        id: number,
        make: string,
        model: string
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