import Count from "./Country_count"








export default function List(props){
    return <div className="list"><Count Country = {props.Country} onMouOv={props.onMouOv} onMouLe ={props.onMouLe} /></div>
}