import React from 'react';

const Data_base = ({ Kuva, Malli, Hinta5h50km, Hinta1vrk100km, Hinta1vko1000km, Tilavuus, TavaratilanPituus, TavaratilanLeveys, TavaratilanKorkeus, Muuta }) => {
    return (
        <div className='max-w-xs mx-4 my-4 overflow-hidden duration-200 ease-in rounded shadow-lg cursor-pointer hover:scale-110 bg-slate-300 rounded-lg'>
            <img src={Kuva} alt={Malli} />
            <p className="text-base text-gray-700">
                    <strong>5h/50km:</strong> {Hinta5h50km}<br />
                    <strong>1vrk/100km:</strong> {Hinta1vrk100km}<br />
                    <strong>1vko/1000km:</strong> {Hinta1vko1000km}<br />
                    <strong>Tilavuus:</strong> {Tilavuus}<br />
                    <strong>Tavaratilan Pituus:</strong> {TavaratilanPituus}<br />
                    <strong>Tavaratilan Leveys:</strong> {TavaratilanLeveys}<br />
                    <strong>Tavaratilan Korkeus:</strong> {TavaratilanKorkeus}<br />
                    <strong>Muuta:</strong> {Muuta}
                </p>
        </div>
    );
};

export default Data_base;
