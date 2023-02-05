import {data} from './CountryData';
import Header from './Country_header';
import Main from './Country_main';
import {useState} from 'react';
import Popop from './Country_popop';

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

 


  const [clas , setclas] = useState('none')
    const [count , setcount] = useState()
  
    const fuonMouOv = (val) => {
      setclas('show')
      setcount(val)
    }
  
    const fuonMouLe = () => {
      setclas('none')
      setcount('')
    }




    return<div className="App">
    <Header index={counter} fonChan ={fonChan} />
    <Main count={count} Country = {fiCountry} onMouOv={fuonMouOv} onMouLe={fuonMouLe}/>
    {count && <Popop clas={clas} count = {count}/>}
    </div>
}

export default CountryApp;