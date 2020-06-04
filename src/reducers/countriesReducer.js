import { FETCH_COUNTRIES} from "../actions/types";

const initialState = { countryList:[],
item:{} };
export default function(state=initialState,action){
    switch(action.type){
        case FETCH_COUNTRIES:
            return{
                ...state,countryList:action.payload
            }
          
    default : return state
    }
}