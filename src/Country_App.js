import {data} from './CountryData';
import Header from './Country_header';
import Main from './Country_main';
import {useState} from 'react';

let newCountry;
newCountry = data.map(v=> v.name.common).sort();



 function CountryApp(){

    

    const [fiCountry , setFiCountry] = useState(newCountry.map(v => v= data.find(val=> val.name.common === v)))
    const [counter , setcounter] = useState(newCountry.length)

    const fonChan = function(e){
    newCountry = data.filter(v => v.name.common.toLowerCase().startsWith(e.target.value.toLowerCase())).map(v=> v.name.common).sort();
    setFiCountry(newCountry.map(v => v= data.find(val=> val.name.common === v)))
    setcounter(newCountry.length)
  } 

 




    return<div className="App">
    <Header index={counter} fonChan ={fonChan} />
    <Main Country = {fiCountry}/>
    
    </div>
}

export default CountryApp;