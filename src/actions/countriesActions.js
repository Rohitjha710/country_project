import { FETCH_COUNTRIES, NEW_POST } from "./types";
export const fetchCountries = () => dispatch => {
  console.log("action called")
  fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(post => dispatch({ type: FETCH_COUNTRIES, payload: post }));
};
export const createPost = postData => dispatch => {
  console.log("actionnnnnnnnnn");
  dispatch({ type: NEW_POST, payload: postData });
};