import Search from './Country_search'





export default function header(props){
    return <header className="App-header">
        <h1>Countries({props.index})</h1>
    <Search fonChan = {props.fonChan}/>
    </header>
}