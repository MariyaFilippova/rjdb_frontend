import axios from "axios";
import {fetchResumeCreator, setMustFetchResumeCreator} from "./resumeReducer";
const SET_MUST_FETCH_VACANCIES = 'SET_MUST_FETCH_VACANCIES';
const FETCH_VACANCIES = 'FETCH_VACANCIES';
const FETCH_VACANCIES_FULFILLED = 'FETCH_VACANCIES_FULFILLED';
const FETCH_VACANCIES_PENDING = 'FETCH_VACANCIES_PENDING';
const FETCH_VACANCIES_REJECTED = 'FETCH_VACANCIES_REJECTED';
const FETCH_RESUMES_PENDING = 'FETCH_RESUMES_PENDING';
const SET_MUST_FETCH_RESUMES = 'SET_MUST_FETCH_RESUMES';
const  FETCH_RESUMES = 'FETCH_RESUMES ';
const FETCH_RESUMES_FULFILLED = 'FETCH_RESUMES_FULFILLED';
const initialState = {
    mustFetch: true,
    fetching: false,
    fetched: false,
    error: null,
    vacancies: [],
    resumes : [],
};

const vacancyReducer = (state = initialState, action) => {
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
        case FETCH_RESUMES :
            return fetchResumeCreator();
        case FETCH_RESUMES_FULFILLED:
            return fetchResumesFulfilled(state, action);
        case SET_MUST_FETCH_VACANCIES:
            return {
                ...state,
                mustFetch: action.newValue
            };

        case FETCH_VACANCIES_PENDING:
            return {
                ...state,
                fetching: false,
            };

        case FETCH_VACANCIES:
            return fetchVacanciesCreator();

        case FETCH_VACANCIES_REJECTED:
            return {
                ...state,
                fetching: false,
                error: action.error
            };
        case FETCH_VACANCIES_FULFILLED:
            return fetchVacanciesFulfilled(state, action);


        default:
            return state;
    }
};
const fetchVacanciesFulfilled = (state, action) => {
    return {
        ...state,
        fetching: false,
        fetched: true,
        vacancies: action.payload.data
    };
};
    const fetchResumesFulfilled = (state, action) => {
        return {
            ...state,
            fetching: false,
            fetched: true,
            resumes: action.payload.data,
        };
    };


export const setMustFetchVacanciesCreator = (newValue) => {
    return {
        type: SET_MUST_FETCH_VACANCIES,
        newValue: newValue
    }
};

export const fetchVacanciesCreator = () => {
    return {
        type: FETCH_VACANCIES,
        payload: axios.get("http://localhost:8080/vacancy")
    }
};


export default vacancyReducer;