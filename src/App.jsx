import { useState } from 'react'

import './App.css'

function  App() {
  const  [counter, setcounter] = useState(0)
  //  const  handelInc=()=>{
  //   // counter+=1;
  //   setcounter(counter+1)
  //   console.log(counter);
  // }
  // const  handelDec=()=>{
  //   // counter-=1;
  //   if(counter-1<0){
  //     alert("not possible")
  //   }else{
      
  //     setcounter(counter-1)
  //   }
  //   console.log(counter);
  // }
 

  function handelInc(){
    if(counter + 1 > 20){
      alert("Limit exceed")
    } else {
      setcounter(counter+1)
      console.log(counter);
    }
  }

  function handelDec(){
    if(counter-1 < 0){
      alert("Value cannot be negetive")
    } else {
      setcounter(counter-1)
      console.log(counter)
    }
  }
// let counter=0;
  return (
    <>
      <h2>hello world</h2>
      <h3>counter value {counter}</h3>
      <button onClick={handelInc} >Inc</button>
      <br />
      <hr />
      <button onClick={handelDec} >Dec</button>
    </>
  )
}

export default App
