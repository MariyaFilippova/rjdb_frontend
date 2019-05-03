import {connect} from "react-redux";
import VacancyPage from "./VacancyPage";
import {
    fetchVacanciesCreator,
    setMustFetchVacanciesCreator,
    fetchResumeCreator,

} from "../../redux/vacancyReducer";


let mapStateToProps = (state) => {
    return {
        resumes: state.resumePage.resumes,
        vacancies: state.vacancyPage.vacancies,
        mustFetch: state.vacancyPage.mustFetch,
    };
};


let mapDispatchToProps = (dispatch) => {
    return {
        setMustFetch: (newValue) => {
            dispatch(setMustFetchVacanciesCreator(newValue));
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