// import Foter from "./comp/foter";
// import * as H from "./constant";


// function App() {
//   // console.log(H);
//   return (
//     <div className="App">
//  {/* <h1>{H}</h1> */}
//  {/* <h1>{ko}</h1> */}
 
//     </div>
//   );
// }

import {Button} from "./button/button";
import {Button as MButton} from "./button/mbutton";

// function App() {
//   return (
//     <div className="App">
  
//    <Button/>
//    <br/>
//    <MButton/>
//     </div>
//   );
// }

// import {Button} from "./button/button";
// function App() {
//   return (
//     <div className="App">
  
//     <Button value='submit' color='blue' />
//     <Button value='click'/>
//     <Button value='Hover'/>

//     </div>
//   );
// }


// import { useState } from "react";

//   function App() {


//     // const [name,setName] = useState('Haseeb')
//    const [todos,settodos] = useState([])
//    const [value,setvalue] = useState([''])
//     return (
//       <div className="App">
//       <h1>Todo app</h1>
//      <input type="text" value={value} onChange={(e)=> setvalue(e.target.value) } />
  
//      <button onClick={()=> {settodos([...todos,value]) 
//       setvalue('') }  } >Add todo</button>

//      {/* <h2>{name}</h2>  */}
//      {/* <button onClick={()=> setName('ismail')} >Update</button> */}
//      <ul>
//      {todos.map((v,i)=> <li key={i} >{v}</li>)}

//      </ul>
//       </div>
//     );
//   }



import { useState } from "react";

function App(){
const [todos , settodos] = useState([])
const [value,setvalue] = useState([])
 

function remove(i){
  const newlist = todos.filter((l)=> l.i !== i )
  settodos(newlist)
}
  return(
    <div>
     <h1>Todo App</h1>
     <input type="text" value={value} onChange={(e)=> setvalue(e.target.value) } />
     <button onClick={()=>{ settodos([...todos,value]) 
      setvalue ('')} } >Add todo </button>

      
     
      {
        todos.map((v,i)=> <li key={i} >{v} <button onClick={()=> remove(i)}  >Delete</button>  </li>   )
      }
       
       

    </div>
  )
}


export default App;
