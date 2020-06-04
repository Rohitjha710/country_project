import {
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_BY_QUERY,
  FETCH_COUNTRIES_BY_REGION,
  UPDATE_QUERY,
  UPDATE_REGION
} from "./types";
export const updateRegion = region => dispatch => {
  dispatch({ type: UPDATE_REGION, payload: region });
};
export const updateQuery = query => dispatch => {
  dispatch({ type: UPDATE_QUERY, payload: query });
};
export const fetchCountries = () => dispatch => {
  fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(countries => dispatch({ type: FETCH_COUNTRIES, payload: countries }));
};
export const fetchCountriesByQuery = (searchQuery, region) => dispatch => {
  console.log(
    `fetch-country-by-query query = +${searchQuery}+ region = +${region}+`
  );
  if (region === "" || region === undefined) {
    fetch("https://restcountries.eu/rest/v2/name/" + searchQuery)
      .then(res => res.json())
      .then(countries => {
        dispatch({ type: FETCH_COUNTRIES_BY_QUERY, payload: countries });
      });
  } else {
    fetch("https://restcountries.eu/rest/v2/region/" + region)
      .then(res => res.json())
      .then(countries => {
        dispatch({
          type: FETCH_COUNTRIES_BY_QUERY,
          payload: countries,
          searchQuery: searchQuery,
          regionIsSet: true
        });
      });
  }
};
export const fetchCountriesByRegion = (region, searchQuery) => dispatch => {
  console.log(
    `fetch-country-by-region query = +${searchQuery}+ region = +${region}+`
  );
  if (searchQuery === "" || searchQuery === undefined) {
    fetch("https://restcountries.eu/rest/v2/region/" + region)
      .then(res => res.json())
      .then(countries => {
        dispatch({ type: FETCH_COUNTRIES_BY_REGION, payload: countries });
      });
  } else {
    console.log("this is what we get" + searchQuery);
    fetch("https://restcountries.eu/rest/v2/name/" + searchQuery)
      .then(res => res.json())
      .then(countries => {
        dispatch({
          type: FETCH_COUNTRIES_BY_REGION,
          payload: countries,
          region: region,
          queryIsSet: true
        });
      });
  }
};
