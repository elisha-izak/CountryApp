import List from "./Country_list"
import Popop from './Country_popop';
import {useState} from 'react';








export default function Main(props){

    const [clas , setclas] = useState('none')
    const [count , setcount] = useState()
  
    const fuonMouOv = (val) => {
      setclas('show')
      setcount(val)
    }
  
    const fuonMouLe = (val) => {
      setclas('none')
    }




    return <><List Country ={props.Country} onMouOv={fuonMouOv} onMouLe={fuonMouLe} />
             <Popop clas={clas} count = {count}/>
</>
}