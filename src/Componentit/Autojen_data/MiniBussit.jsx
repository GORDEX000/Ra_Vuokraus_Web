import React from 'react';
import Data_base from './Data_base';






const data = [
    {
        Kuva: 'https://www.ra-vuokraus.com/site/assets/files/1139/20201123_114527.460x460.jpg',
        Malli: '15m3 Kuormatilalla',
        Hinta5h50km: '60€',
        Hinta1vrk100km: '85€',
        Hinta1vko1000km: '530€',
        Tilavuus: '',
        TavaratilanPituus: '420cm',
        TavaratilanLeveys: '170cm',
        TavaratilanKorkeus: '170cm',
        Muuta: 'M-PAKETTIAUTOT Tämän kokoluokan autoissa 7-8m3 kuormatilaa, lattiapituudet 245-285cm Ajoneuvojen kokonaiskorkeus max. 240cm. Pienempiin kuljetustarpeisiin järkevämpi vaihtoehto. Jos et ole hakenut autoa tai ilmoittanut että myöhästyt 1,5h sisällä, auto voidaan siirtää seuraavalle asiakkaalle. Vetohommiin esimerkiksi Transit nro 34, 2800kg vetomassalla.',
    },
];

const Vuokra = () => {
    return (
        <div id='vuokra' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <div className="container-box">
                <div className='flex justify-center'>
                    {data.map((item, idx) => (
                        <div key={idx} className="flex-shrink-0 mx-4 card-container">
                            <Data_base
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
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Vuokra;
