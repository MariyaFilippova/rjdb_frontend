import {Promise as axios} from "q";

let SEND_RESUME ='SEND_RESUME';
let initialState = {
    vacancies: [],
}


    const vacanсyReducer = (state, action) => {
    switch (action.type) {
        case SEND_RESUME:
            return sendResume(state, action);
        case
        default:
            return state;


    }
};
export const sendResume = (state, action) => {
    action = axios.get("http://localhost:3000/resume_form");
    return state;

};


export default vacancyReducer;