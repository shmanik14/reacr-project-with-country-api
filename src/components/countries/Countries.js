import React, { useState, useEffect } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() =>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, []);

    const sectionStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridGap: '10px',
    };
    return (
        <div>
            <h1>Total Country: {countries.length}</h1>
            <section style={sectionStyle}>
                {
                countries.map(country => <Country country={country} key={country.alpha3Code}></Country>)
                }
            </section>
        </div>
    );
};

export default Countries;