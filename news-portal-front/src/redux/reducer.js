import { legacy_createStore as createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";

const newsReducer = () => {

}



export const store = createStore(newsReducer,applyMiddleware(thunk))