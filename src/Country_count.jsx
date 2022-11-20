










export default function Count(props){
    
    return <>
    { props.Country.map(v=> <div className='count' onMouseOver={() => props.onMouOv(v)} onMouseLeave={() => props.onMouLe(v)} >
        
        <img src={v.flags.png} alt="flag" />
        <span>
            <h3>{v.name.common} -</h3> 
            <h4> {v.continents[0]} </h4>
        </span>
        <span> <br/>{ v.capital? v.capital[0] : v.capital} </span>



    </div>)}

    </>}

