import axios from "axios";
const SET_MUST_FETCH_VACANCIES = 'SET_MUST_FETCH_VACANCIES';
const FETCH_VACANCIES = 'FETCH_VACANCIES';
const FETCH_VACANCIES_FULFILLED = 'FETCH_VACANCIES_FULFILLED';
const FETCH_VACANCIES_PENDING = 'FETCH_VACANCIES_PENDING';

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
        case FETCH_RESUMES_FULFILLED:
            return fetchResumesFulfilled(state, action);
        case SET_MUST_FETCH_VACANCIES:
            return {
                ...state,
                mustFetch: action.newValue
            };
        case FETCH_RESUMES:
            return fetchResumeCreator;

        case FETCH_VACANCIES_PENDING:
            return {
                ...state,
                fetching: false,
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
export const fetchResumeCreator = () => {
    return {
        type: FETCH_RESUMES,
        payload: axios.get("http://localhost:8080/resumes")
    }
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