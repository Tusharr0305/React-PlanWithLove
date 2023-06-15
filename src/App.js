import React ,{ useState } from "react";
// import "./App.css";
import data from "./data";
import Tours from "./components/Tours"

const App = () => {
  const[tours,setTours]=useState(data);

  function removeTour(id){
    //                         (tours=>) means  tours me jana fir vaha se filter kerna 
   const newTours= tours.filter(tours=>tours.id!==id);
   setTours(newTours);
  } 
  if(tours.length === 0){
    return(
      <div className="refresh">
        <h1>No tours left</h1>
        <button className="btn-white"  onClick={()=>{setTours(data)}}> 
        Refresh
        </button>
      </div>
    )
  }
  return (
  <div>
    <Tours tours={tours} removeTour={removeTour}></Tours>
  </div>
  )
}

export default App;
