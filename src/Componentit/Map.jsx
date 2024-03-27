import React from 'react';

const Map = () => {
    return (
        <div style={{ width: '100%', height: '100vh', margin: 0, padding: 0 }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6622.762580297261!2d22.244151191369717!3d60.429381042190236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468c770ee8894147%3A0x9bb167f94d2f229!2sRA-Vuokraus!5e0!3m2!1sen!2sfi!4v1711579267229!5m2!1sen!2sfi"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default Map;
