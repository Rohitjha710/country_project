import {
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_BY_QUERY,
  FETCH_COUNTRIES_BY_REGION,
  UPDATE_QUERY,
  UPDATE_REGION,
  FETCH_COUNTRY
} from "../actions/types";

const initialState = {
  countryList: [],
  region: "",
  query: "",
  countryDetails: {}
};
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_COUNTRY:
      return {
        ...state,countryDetails:action.payload
      };
    case FETCH_COUNTRIES:
      return {
        ...state,
        countryList: action.payload
      };
    case FETCH_COUNTRIES_BY_QUERY:
      if (action.regionIsSet) {
        return {
          ...state,
          countryList: action.payload.filter(country =>
            country.name
              .toLowerCase()
              .includes(action.searchQuery.toLowerCase())
          )
        };
      } else {
        return {
          ...state,
          countryList: action.payload
        };
      }
    case FETCH_COUNTRIES_BY_REGION:
      if (action.queryIsSet) {
        return {
          ...state,
          countryList: ((action.payload.length !== 0) && (action.payload.filter(country =>
            country.region.toLowerCase().includes(action.region.toLowerCase())))
          )
        };
      } else {
        return {
          ...state,
          countryList: action.payload
        };
      }
    case UPDATE_QUERY:
      return {
        ...state,
        query: action.payload
      };
    case UPDATE_REGION:
      return {
        ...state,
        region: action.payload
      };
    default:
      return state;
  }
}
