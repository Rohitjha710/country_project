import React, { Component } from 'react';
class Country extends Component {
    render() {
        const {country} = this.props; 
        return (<div className="country-homepage">
            <img src={country.flag} className="country-image-homepage" alt="Country-Flag"/>
    <p className="country-name-homepage">{country.name}</p>
    <p className="country-details-homepage">Population:{country.population}</p>
            <p className="country-details-homepage">Region:{country.region}</p>
            <p className="country-details-homepage">Capital:{country.capital}</p>
        </div>);
    }
}
 
export default Country;