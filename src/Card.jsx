import lego from "./assets/lego.png"

function Card() {
    return (
        <div className="bg-gray-300 p-4  max-w-sm rounded-lg shadow-lg mb-10 inline-block text-center justify-center items-center">
            <img src={lego} alt="Robô lego" className="max-h-40 mx-auto mb-4" />
            <a href="" className="font-jura text-2xl font-bold"> NXT Castor Bot</a>
            <p className="font-roboto text-gray-500">This robot uses two-motor drive and a pivoting castor wheel to allow it to turn easily on either carpet or hard floors. It can be used as a simple turning vehicle or as a base for other projects.</p>
        </div>
    );
}

export default Card;
