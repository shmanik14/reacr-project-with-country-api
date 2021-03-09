import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const {flag, name} = props.country;
    return (
        <div style={{border:'1px solid #aaa', paddingBottom: '10px'}}>
            <img src={flag} alt={name} height="100px" />
            <h4>Country Name: {name}</h4>
            <button><Link to={`/country/${name}`}> Read More</Link></button>
        </div>
    );
};

export default Country;