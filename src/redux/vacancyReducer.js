import {Promise as axios} from "q";
const SEND_RESUME = 'SEND_RESUME';
const SET_MUST_FETCH_VACANCIES = 'SET_MUST_FETCH_PRODUCTS';
const FETCH_VACANCIES = 'FETCH_PRODUCTS';
const FETCH_VACANCIES_PENDING = 'FETCH_PRODUCTS_PENDING';
const FETCH_VACANCIES_REJECTED = 'FETCH_PRODUCTS_REJECTED';
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

        case FETCH_VACANCIES_REJECTED:
            return {
                ...state,
                fetching: false,
                error: action.error
            };

        case SEND_RESUME:
            return sendResume(state, action);

        default:
            return state;
    }
};
const sendResume = (state, action) => {
    axios.post("http://localhost:8080/rjdb/resumes/???");
    return state;
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
        payload: axios.get("http://localhost:8080/mipt-shop/vacancies")
    }
};

export const sendResumeCreator = (vacancyId) => {
    return {
        type: SEND_RESUME,
        vacancyId: vacancyId
    }
};

export default vacancyReducer;