import React from 'react';

const VuokraTavarat = ({ Kuva, Malli, Hinta5h50km, Hinta1vrk100km, Hinta1vko1000km, Tilavuus, TavaratilanPituus, TavaratilanLeveys, TavaratilanKorkeus, Muuta }) => {
    return (
        <div>
            <img src={Kuva} alt={Malli} />
            <p>{Malli}</p>
            <p>{Hinta5h50km}</p>
            <p>{Hinta1vrk100km}</p>
            <p>{Hinta1vko1000km}</p>
            <p>{Tilavuus}</p>
            <p>{TavaratilanPituus}</p>
            <p>{TavaratilanLeveys}</p>
            <p>{TavaratilanKorkeus}</p>
            <p>{Muuta}</p>
        </div>
    );
};

export default VuokraTavarat;
