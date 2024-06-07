import displaycss from './Display.module.css'
const Display = ({displayCon})=> {
return <input placeholder="Select the values..." onChange={(event)=> console.log(event.target.value)}  type="text" className={displaycss.display} value={displayCon}/>
}

export default Display; 