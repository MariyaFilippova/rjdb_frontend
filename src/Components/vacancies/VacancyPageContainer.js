import {connect} from "react-redux";
import VacancyPage from "./VacancyPage";
import {
    fetchVacanciesCreator,
    setMustFetchVacanciesCreator,
    fetchResumeCreator,
    selectResumeCreator,
    sendResumeCreator,
    selectVacancyCreator,
    fetchCompaniesCreator,
    setMustFetchCompanyCreator, setMustFetchAreaCreator,

} from "../../redux/vacancyReducer";
import {fetchAreasCreator, setMustFetchResumeCreator} from "../../redux/resumeReducer";


let mapStateToProps = (state) => {
    return {
        resumes: state.resumePage.resumes,
        vacancies: state.vacancyPage.vacancies,
        mustFetch: state.vacancyPage.mustFetch,
        companies: state.vacancyPage.companies,
        areas : state.vacancyPage.areas
    };
};


let mapDispatchToProps = (dispatch) => {
    return {
        setMustFetch: (newValue) => {
            dispatch(setMustFetchVacanciesCreator(newValue));
            dispatch(setMustFetchResumeCreator(newValue));
            dispatch(setMustFetchCompanyCreator(newValue));
            dispatch(setMustFetchAreaCreator(newValue));
        },
        selectResume: (event) => {
            let resume = event.target.value;
            dispatch(selectResumeCreator(resume))
        },
        sendResume: (event) => {
            dispatch(sendResumeCreator(event));
        },
        fetchVacancies: () => {
            dispatch(fetchVacanciesCreator());
        },
        fetchResumes: () => {
            dispatch(fetchResumeCreator())
        },
        fetchCompanies: () => {
            dispatch(fetchCompaniesCreator())
        },
        fetchAreas: () => {
            dispatch(fetchAreasCreator())
        }
    };
};

let VacancyPageContainer = connect(mapStateToProps, mapDispatchToProps)(VacancyPage);

export default VacancyPageContainer;