import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducers from "./reducers/offerReducers";

export default function configureStore(initialState) {
    const store = createStore(reducers, initialState, applyMiddleware(thunk, logger));
    return store;
}