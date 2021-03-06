import { applyMiddleware, createStore } from "redux";
import Reducers from "./Reducers";
//import logger from 'redux-logger'
import promise from "redux-promise-middleware";

const middleware = applyMiddleware(promise());

export default createStore(Reducers, middleware);
