import React from "react";
import ResumePage from "./ResumePage";
import { fetchResumeCreator, setMustFetchResumeCreator} from "../../redux/resumeReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        mustFetch: state.resumePage.mustFetch,
        resumes: state.resumePage.resumes,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        setMustFetch: (newValue) => {
            dispatch(setMustFetchResumeCreator(newValue));
        },
        fetchResumes: () => {
            dispatch(fetchResumeCreator());
        }
    };
};


let ResumePageContainer = connect(mapStateToProps, mapDispatchToProps)(ResumePage);


export default ResumePageContainer;