import React, { Component } from 'react';
class Country extends Component {
    render() { 
        return (<div className="country-homepage">
            <img src="https://restcountries.eu/data/afg.svg" className="country-image-homepage" alt="Country-Flag"/>
            <p className="country-name-homepage">India</p>
            <p className="country-details-homepage">Population:1233333</p>
            <p className="country-details-homepage">Region:Asia</p>
            <p className="country-details-homepage">Capital:New Delhi</p>
        </div>);
    }
}
 
export default Country;