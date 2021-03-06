import { applyMiddleware, createStore, combineReducers } from "redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import formReducer from "./components/SignUpForm/formReducer";

const middleware = applyMiddleware(promise(), thunk, logger);

const store = createStore(combineReducers({
    form: formReducer
}), middleware);

export default store;
