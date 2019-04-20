
import {applyMiddleware, combineReducers, createStore} from "redux";

import resumeReducer from "./resumeReducer";
import vacancyReducer from "./vacancyReducer";



let reducers = combineReducers({
    vacancyPage: vacancyReducer,
    resumePage: resumeReducer,
});


export let store = createStore(reducers);

export default store;