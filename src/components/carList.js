import React from 'react';

const CarList = (prop) => {
    const car= prop.join
    return (
        <div>
            <h1>TOYOTA ...everything car</h1>  
          {
              car.map((vehicle)=>(
                <div key={vehicle.id}>
                    <p>{vehicle.brand}</p>
                    <p>{vehicle.model}</p>
                    <p>{vehicle.colour}</p>
                    <p>{vehicle.year}</p>
                    <hr />
                </div>  
              ))
          }
        </div>
    );
}

export default CarList;
