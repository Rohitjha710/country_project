import { FETCH_COUNTRIES, NEW_POST } from "./types";
export const fetchCountries = () => dispatch => {
  console.log("action called")
  fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(countries => dispatch({ type: FETCH_COUNTRIES, payload: countries }));
};
