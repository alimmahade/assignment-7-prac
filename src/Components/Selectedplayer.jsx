const Selectedplayer = ({selectP, handleDelete}) => {
 
    return (
        <div>
    {
        selectP.map(p=><footer key={p.id} className="footer footer-title bg-base-300 text-base-content p-4 border shadow-md rounded-md">
            <div className="flex">
                <p>Name: {p.name}</p>
                <p>Role: {p.role}</p>
                <p>Country: {p.country}</p>
                <button onClick={()=>handleDelete(p.id)}>Delete</button>
            </div>
        </footer>)
    }
        </div>
    );
};

export default Selectedplayer;