import {connect} from "react-redux";
import VacancyPage from "./VacancyPage";
import {
    fetchVacanciesCreator,
    setMustFetchVacanciesCreator,

} from "../../redux/vacancyReducer";
import {
    fetchResumeCreator,
    setMustFetchResumeCreator
} from "../../redux/resumeReducer";


let mapStateToProps = (state) => {
    return {
        resumes: state.vacancyPage.resumes,
        vacancies: state.vacancyPage.vacancies,
        mustFetch: state.vacancyPage.mustFetch,
    };
};


let mapDispatchToProps = (dispatch) => {
    return {
        setMustFetch: (newValue) => {
            dispatch(setMustFetchVacanciesCreator(newValue));
        },
        setMustFetchResumes: (newValue) =>
        {
            dispatch(setMustFetchResumeCreator(newValue))
        },
        fetchVacancies: () => {

            dispatch(fetchVacanciesCreator());
        },
        fetchResumes: () => {
            dispatch(fetchResumeCreator())
        }

    };
};

let VacancyPageContainer = connect(mapStateToProps, mapDispatchToProps)(VacancyPage);

export default VacancyPageContainer;