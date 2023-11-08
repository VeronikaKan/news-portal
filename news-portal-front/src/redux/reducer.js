import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
    allNews: [],
    categories: [],
    registerUser: {},
    selected: [],
    token: JSON.parse(localStorage.getItem('token')),
    userId: 0,
    user: {},
    oneNews: {},
    likeCount: 0,
    loader: false

}
const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER_USER':
            return { ...state, registerUser: action.payload }
        case "AUTH":
            return { ...state, token: action.payload }
        case "AUTH_USER":
            return { ...state, userId: action.payload }
        case 'SHOW LOADER':
            return { ...state, loader: action.payload }
        case "GET_USER":
            return { ...state, user: action.payload }
        case 'GET_ALL_NEWS':
            return { ...state, allNews: action.payload }
        case 'GET_CATEGORIES':
            return { ...state, categories: action.payload }
        case "GET_SELECTED_CATEGORY":
            return { ...state, selected: action.payload }
        case 'GET_NEWS_BY_ID':
            return { ...state, oneNews: action.payload }
        case "ADD_LIKE":
            return { ...state, likeCount: action.payload }

        default:
            return state
    }
}



export const store = createStore(newsReducer, applyMiddleware(thunk))