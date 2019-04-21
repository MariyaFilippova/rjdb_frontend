import axios from "axios";


const SET_MUST_FETCH_RESUMES = 'SET_MUST_FETCH_ORDERS';
const FETCH_RESUMES = 'FETCH_ORDERS';
const FETCH_RESUMES_PENDING = 'FETCH_ORDERS_PENDING';
const FETCH_RESUMES_REJECTED = 'FETCH_ORDERS_REJECTED';
const FETCH_RESUMES_FULFILLED = 'FETCH_ORDERS_FULFILLED';
const ADD_RESUME = 'ADD_RESUME';

let initialState = {

    mustFetch: true,
    fetching: false,
    fetched: false,
    error: null,
    resumes: []
};


const resumeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MUST_FETCH_RESUMES:
            return {
                ...state,
                mustFetch: action.newValue
            };

        case FETCH_RESUMES_PENDING:
            return {
                ...state,
                fetching: false,
                error: null
            };

        case FETCH_RESUMES_REJECTED:
            return {
                ...state,
                fetching: false,
                error: action.error
            };

        case FETCH_RESUMES_FULFILLED:
            return {
                ...state,
                fetching: false,
                fetched: true,
            };
        case ADD_RESUME:
            return addResume(state, action);
        default:
            return state;

    }

};

    const addResume = (state) =>
    {

    };

    export const setMustFetchResumeCreator = (newValue) => {
        return {
            type: SET_MUST_FETCH_RESUMES,
            newValue: newValue
        }
    };

    export const addResumeCreator = () =>
    {
        return{
            type: ADD_RESUME,



        }
    };


    export const fetchResumeCreator = () => {
        return {
            type: FETCH_RESUMES,
            payload: axios.get("http://localhost:8080/resumes")
        }
    };



export default resumeReducer;