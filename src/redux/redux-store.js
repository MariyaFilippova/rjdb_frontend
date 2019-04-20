
import {applyMiddleware, combineReducers, createStore} from "redux";

import {Field, reducer as resumeFormReducer } from "redux-form";
import resumeReducer from "./resumeReducer";
import vacancyReducer from "./vacancyReducer";



let reducers = combineReducers({
    ordersPage: vacancyReducer,
    productsPage: resumeReducer,
    resumeFormPage: resumeFormReducer,
});


export let store = createStore(reducers);

export default store;