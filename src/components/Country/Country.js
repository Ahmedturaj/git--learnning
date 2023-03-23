import React from 'react';
import'./Country.css'
const Country = (props) => {
    const{name, population, region, area, flags}=props.country;
    return (
        <div className='country'>
            <h2>Country Name:{name.common}</h2>
            <img src={flags.png} alt="" />
            <p><small>Population:{population}</small></p>
            <p><small>region:{region}</small></p>
            <p><small>area:{area}</small></p>
        </div>
    );
};

export default Country;