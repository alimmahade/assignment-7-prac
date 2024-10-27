import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Bannar from "./Components/Bannar";
import Available from "./Components/Available";
import Selectedplayer from "./Components/Selectedplayer";

const App = () => {
  const [selectedPlayers, setSelectedPlayers]=useState([]);
  const handleSelectedPlayers=(data)=>{
    setSelectedPlayers([...selectedPlayers,data]);
  }

  const [credit, setCridit]=useState(0);
  const handleCredit=(amount)=>{
  setCridit(credit+amount);
}
const [isActive, setisActive]=useState(true);
const handleActive=(status)=>{
if(status){
  setisActive(true)
}
else{setisActive(false)}
}

const [cards,setCards]=useState([])
useEffect(()=>{
  fetch('data.json')
  .then(res=>res.json())
  .then(data=>setCards(data))
},[])

  return (
    <div>
      <div>
      <Header credit={credit}/>
      <Bannar handleCredit={handleCredit}/>
    </div>
    <div className="flex justify-center gap-6">
      <button onClick={()=>handleActive(true)} className="btn">Available</button>
      <button onClick={()=>handleActive(false)} className="btn">Selected( {selectedPlayers.length} )</button>
         </div>
         {
        isActive?<Available handleSelectedPlayers={handleSelectedPlayers} cards={cards}/>:<Selectedplayer selectedPlayers={selectedPlayers}/>
      }
    </div>
  );
};

export default App;