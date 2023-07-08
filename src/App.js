import './App.css';
import { useState } from 'react';

const list=["itme1","item2",];


function App() {
  const [task,setTask]=useState('');
  const handleChange=(event)=>{
    const {value}=event.target;
    setTask(value);
  };
  const handleClick=()=>{
   
    list.push(task)
    setTask("");
  };
  return (
    <div className={"flex items-center justify-center h-screen"}>
    <div className={"flex flex-col gap-12 itmes-center justify-between "}>
      <div>
        <h1 className={"text-center text-6xl font-bold"} >
          TODO
        </h1>
      </div>
      <div className={"flex flex-row gap-12 items-center justify-between"}>
        <input className={"border-b-2 p-10"}  value={task} onChange={handleChange}>

        </input>
          
        <button onClick={handleClick}  >
          + &nbsp; Add
        </button>
      </div>
      <div className={"flex gap-12 items-center justify-center flex-col"}>
        
          {list.map((value,index)=>{
              return(

                <div className={"p-10 flex w-full gap-4 flex-col border 10xl"}>
                  {value}
                </div>
              )
          })}
        
      </div>
    </div>
    </div>
  );
}

export default App;
