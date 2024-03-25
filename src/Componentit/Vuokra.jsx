import React from 'react';
import VuokraTavarat from './VuokraTavarat';

const data = [
    {
        Kuva: './assets/ra_vuokraus_kuvat/15m3_Kuormatilalla.jpg',
        Malli: '15m3 Kuormatilalla',
        Hinta5h50km: '60€',
        Hinta1vrk100km: '85€',
        Hinta1vko1000km: '530€',
        Tilavuus: '',
        TavaratilanPituus: '420cm',
        TavaratilanLeveys: '170cm',
        TavaratilanKorkeus: '170cm',
        Muuta: 'M-PAKETTIAUTOT Tämän kokoluokan autoissa 7-8m3 kuormatilaa, lattiapituudet 245-285cm Ajoneuvojen kokonaiskorkeus max. 240cm. Pienempiin kuljetustarpeisiin järkevämpi vaihtoehto. Jos et ole hakenut autoa tai ilmoittanut että myöhästyt 1,5h sisällä, auto voidaan siirtää seuraavalle asiakkaalle. Vetohommiin esimerkiksi Transit nro 34, 2800kg vetomassalla.',
    }
];

const Vuokra = () => {
    return (
        <div id='vuokra' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-cneter text-[#001b5e]'>Vuokra</h1>
            {data.map((item, idx) => (
                <VuokraTavarat
                    key={idx}
                    Kuva={item.Kuva}
                    Malli={item.Malli}
                    Hinta5h50km={item.Hinta5h50km}
                    Hinta1vrk100km={item.Hinta1vrk100km}
                    Hinta1vko1000km={item.Hinta1vko1000km}
                    Tilavuus={item.Tilavuus}
                    TavaratilanPituus={item.TavaratilanPituus}
                    TavaratilanLeveys={item.TavaratilanLeveys}
                    TavaratilanKorkeus={item.TavaratilanKorkeus}
                    Muuta={item.Muuta}
                />
            ))}
        </div>
    );
};

export default Vuokra;
