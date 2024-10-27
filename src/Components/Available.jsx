const Available = ({cards, handleSelectedPlayers}) => {
    
    return (
        <div>
            <h1>Available Players</h1>
            <div className="grid grid-cols-3 gap-7">
                {cards.map(card=><div key={card.id} className="card bg-base-100 w-auto shadow-xl">
  <figure>
    <img
      src={card.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button onClick={()=>handleSelectedPlayers(card)} className="btn">Choose Player</button>
    </div>
  </div>
</div>)}
            </div>
        </div>
    );
};

export default Available;