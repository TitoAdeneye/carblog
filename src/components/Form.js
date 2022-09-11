import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const [brand,setBrand] = useState("");
    const [model,setModel] = useState("");
    const [colour,setColour] = useState("");
    const [year,setYear] = useState("");
    const[isLoading,setIsLoading] = useState(false);
    const navigate = useNavigate()


    const submitButton = (e) => {
        

        e.preventDefault();
        alert(`submitted`)

        const car= {brand,model,colour,year};
        setIsLoading(true);

        fetch('https://my-json-server.typicode.com/Titoadeneye/carDb/car',{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(car)
        })
        .then(
            setIsLoading(false),
            navigate('/')
        )
    }
    return (
        <div>
            <form onSubmit={submitButton}>
                <div>
                    <label htmlFor="inputPassword5" className="form-label">Brand:</label>
                    <input type="text" placeholder='Brand' value={brand} onChange={(e)=>setBrand(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="inputPassword5" className="form-label">Model:</label>
                    <input type="text" placeholder='Brand' value={model} onChange={(e)=>setModel(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="inputPassword5" className="form-label">Colour:</label>
                    <input type="text" placeholder='Colour' value={colour} onChange={(e)=>setColour(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="inputPassword5" className="form-label">Year:</label>
                    <input type="text" placeholder='Year' value={year} onChange={(e)=>setYear(e.target.value)}/>
                </div>
                
                {!isLoading && <button type="submit" className="btn btn-primary">Submit</button>}

                {isLoading && <button disable type="submit" className="btn btn-primary">Submit</button>}

            </form>
        </div>
    );
}

export default Form;
