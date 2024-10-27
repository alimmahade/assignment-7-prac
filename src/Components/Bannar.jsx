const Bannar = ({handleCredit}) => {

    return (
        <div>
            <div className="grid">
                <div className="flex justify-center gap-4">
                <img src="/src/assets/banner.png" alt="" />
                </div>
                <div>
                <h1 className="text-center text-4xl font-extrabold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className="text-center">Beyond Boundaries Beyond Limits</p>
                <div className="flex justify-center">
                <button onClick={()=>handleCredit(600000)} className="btn">Clim free Cradit</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;