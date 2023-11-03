import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
    allNews: [],
    categories:[],
    registerUser:{},
}
const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case'REGISTER_USER':
        return{...state,registerUser:action.payload}
        case 'GET_ALL_NEWS':
            return { ...state, allNews: action.payload }
            case 'GET_CATEGORIES':
                return {...state,categories:action.payload}
        default:
            return state
    }
}



export const store = createStore(newsReducer, applyMiddleware(thunk))