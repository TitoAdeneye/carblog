import UseCustomHook from './useCustomHook';
import CarList from './carList';

const Cars = () => {
    const {data:car, isLoading, isError} = UseCustomHook("https://my-json-server.typicode.com/Titoadeneye/carDb/car")
    return (
        <div>
          {car && <CarList join={car} />}

          {isLoading ? 
                <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
               </div>  : ""
        }

          {isError && 
              <div>
               <p>Error Fetching Data</p>
              </div>
              }
        </div>
    );
}

export default Cars;
