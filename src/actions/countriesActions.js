import { FETCH_COUNTRIES, FETCH_COUNTRIES_BY_QUERY, FETCH_COUNTRIES_BY_REGION } from "./types";
export const fetchCountries = () => dispatch => {
  fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(countries => dispatch({ type: FETCH_COUNTRIES, payload: countries }));
};
export const fetchCountriesByQuery = (searchQuery) => dispatch => {
  fetch("https://restcountries.eu/rest/v2/name/"+searchQuery)
    .then(res => res.json())
    .then(countries => dispatch({ type: FETCH_COUNTRIES_BY_QUERY, payload: countries }));
};
export const fetchCountriesByRegion = (region) => dispatch => {
  fetch("https://restcountries.eu/rest/v2/region/" + region)
    .then(res => res.json())
    .then(countries => dispatch({ type: FETCH_COUNTRIES_BY_REGION, payload: countries }));
};