const Available = ({playersDetails, handleChoose}) => {
  const {id,name,country,image,role,battingType,bowlingType,price}=playersDetails;
  return (
    <div>
     <div className="grid grid-cols-3">
     {
      playersDetails.map(p=> <div key={p.id} className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={p.image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{p.name}</h2>
          <p> Price: $ {p.price}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>handleChoose(p)} className="btn btn-primary">Choose Player</button>
          </div>
        </div>
        </div>)
     }
     </div>
    </div>
  );
};

export default Available;