import List from "./Country_list"








export default function Main(props){

    




    return <div  className={props.count?'filter':''}>
    <List Country ={props.Country} onMouOv={props.onMouOv} onMouLe ={props.onMouLe} />
    </div>

}