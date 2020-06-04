import {
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_BY_QUERY,
  FETCH_COUNTRIES_BY_REGION
} from "../actions/types";

const initialState = { countryList: [] };
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_COUNTRIES:
    case FETCH_COUNTRIES_BY_QUERY:
    case FETCH_COUNTRIES_BY_REGION:
      return {
        ...state,
        countryList: action.payload
      };

    default:
      return state;
  }
}
