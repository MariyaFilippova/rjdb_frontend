import axios from "axios";
const SEND_RESUME = 'SEND_RESUME';
const SET_MUST_FETCH_VACANCIES = 'SET_MUST_FETCH_VACANCIES';
const FETCH_VACANCIES = 'FETCH_VACANCIES';
const FETCH_VACANCIES_FULFILLED = 'FETCH_VACANCIES_FULFILLED';
const FETCH_VACANCIES_PENDING = 'FETCH_VACANCIES_PENDING';
const FETCH_VACANCIES_REJECTED = 'FETCH_VACANCIES_REJECTED';
const initialState = {
    mustFetch: true,
    fetching: false,
    fetched: false,
    error: null,
    vacancies: [],
};

const vacancyReducer = (state = initialState, action) => {
    switch (action.type) {
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

        case SEND_RESUME:
            return sendResume(state, action);

        default:
            return state;
    }
};
const sendResume = (state, action) => {
    axios.post("http://localhost:8080/rjdb/resum/");
    return state;
};
const fetchVacanciesFulfilled = (state, action) => {
    return {
        ...state,
        fetching: false,
        fetched: true,
        vacancies: action.payload.data
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

export const sendResumeCreator = (vacancyId) => {
    return {
        type: SEND_RESUME,
        vacancyId: vacancyId
    }
};

export default vacancyReducer;