

let lang =[];


export default function Popop(props){

    const lan = (lan)=>{
        if(lang) {lang = []};
       for (let key in lan)
       {lang.push(lan[key])}
       return lang
    }


    return <div className={props.clas}>
        <img src={props.count? props.count.flags.png:props.count} alt="flag" />
        <h3>Population:</h3> 
        <span>{props.count? props.count.population:props.count}</span>
        <h3>Languages:</h3> 
        {props.count?  lan(props.count.languages).map(v => <span>{v}<br/></span>):props.count}
        
        
        </div>
}