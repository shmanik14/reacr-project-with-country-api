import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const CountryDetails = () => {
    const {countryName} = useParams();
    const [country, setCountry] = useState({});
    useEffect(() =>{
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data[0]))
    }, []);
    
    return (
        <div>
            <img src={country.flag} alt="" width="500px" />
            <h3>Name: {country.name}</h3>
            <h3>Area: {country.area} Square KM</h3>
            <button><Link to="/">Home</Link> </button>
        </div>
    );
};

export default CountryDetails;