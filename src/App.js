import { useState, useEffect } from 'react';
import './assets/App.css';
import {v4 as uuidv4} from 'uuid';
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
        <section>
             {/* {console.log(value)} */}
            <h1>Experience</h1>
            {company.map((val, index)=>{
                // {console.log(val);}
                return (
                <>
                <button className='job-btn' key={uuidv4}   onClick={()=>{setvalue(index)}}>{val.company}</button>

                </>
                )
                // {console.log(val);}
            })}
            <h4 className='job-date'>{dates}</h4>
            <h3>{title}</h3>
            <p key={uuidv4}>{duties}</p>
            </section>
    )
}
export default App;