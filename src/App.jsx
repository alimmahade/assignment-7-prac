import { useEffect, useState } from 'react';
import Bannar from './Components/Bannar';
import Header from './Components/Header';
import Available from './Components/Available';
import Selectedplayer from './Components/Selectedplayer';
const App = () => {
  // credit
  const [credit, setCredit]=useState(0);
  const handleCredit=(a)=>{
    setCredit(a+credit);
  }
  // Togle
  const [togle, setTogle]=useState(true);
  const handleTogle=(status)=>{
    setTogle(status)
  }

  // data load
  const [playerCards, setPlayerCards]=useState([]);
  useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setPlayerCards(data))
  },[])

  const [selectP, setSelectP]=useState([]);
  const handleChoose=(p)=>{
    setSelectP([...selectP,p])
    const chooseP=playerCards.filter(pd=>pd.id!==p.id);
    setPlayerCards(chooseP)

  }
  const handleDelete=(id)=>{
    const deleteItem=selectP.find(p=>p.id===id);
    playerCards.unshift(deleteItem);
    const updateP=selectP.filter(p=>p.id!==id);
    setSelectP((updateP))
  }

  return (
    <div>
        <Header updateCredit={credit}/>
        <Bannar handleCredit={handleCredit}/>
        <div className='flex justify-center gap-8'>
        <button onClick={()=>handleTogle(true)} className='btn'>Available Player</button>
        <button onClick={()=>handleTogle(false)} className='btn'>Selected Player {selectP.length}</button>
        </div>
        {
          togle?<Available handleChoose={handleChoose} playersDetails={playerCards}/>:<Selectedplayer handleDelete={handleDelete} selectP={selectP}/>
        }
    </div>
  );
};

export default App;