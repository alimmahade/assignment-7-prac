const Selectedplayer = ({selectedPlayers}) => {

    return (
        <div>
            <h1>Selected Players</h1>
            <h1>{selectedPlayers.map(p=><p key={p.id}>{p.name}</p>)}</h1>
        </div>
    );
};

export default Selectedplayer;