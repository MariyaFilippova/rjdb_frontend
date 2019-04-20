import Resume from "../Components/resumes/item/Resume";

const CREATE_NEW_RESUME = 'CREATE_NEW_RESUME';

let initialState = {
    resumes:[],


};

const resumeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_NEW_RESUME:
            let newResume = {
                ...state,
                message: Resume.new
            }
    }

};

export const  createNewResumeCreator = () => {
    return{
        type: CREATE_NEW_RESUME,


    }

};
