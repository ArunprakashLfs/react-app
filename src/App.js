import { useState, useEffect } from 'react';
import './assets/App.css';
let URL = 'https://course-api.com/react-tabs-project';

const App = ()=>{
    let [company, setcompany] = useState([]);
    let [isloading, setisloading]= useState(true);
    let [value, setvalue] = useState(0);
    // let [value, setvalue] = useState(0);
    const fetchcompany = async()=>{
        const responce = await fetch(URL);
        const data = await responce.json();
        console.log(data);
        setcompany(data);
        setisloading(false);
    };
    useEffect(()=>{
        fetchcompany()
    }, []);
    if(isloading){
        return(
            <h1>...Loading</h1>
        )
        
    }
    const {title, duties, dates} = company[value];
    console.log(title);
    console.log(company);
    return (
        <div>
             {/* {console.log(value)} */}
            <h1>Experience</h1>
            {company.map((val, index)=>{
                // {console.log(val);}
                return (
                <>
                <button className='job-btn' onClick={()=>{setvalue(index)}}>{val.company}</button>

                </>
                )
                // {console.log(val);}
            })}
            <div>{dates}</div>
            <div>{title}</div>
            <p>{duties}</p>
            </div>
    )
}
export default App;