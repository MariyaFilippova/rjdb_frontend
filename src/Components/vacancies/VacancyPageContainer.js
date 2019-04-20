import {connect} from "react-redux";
import ProductPage from "./VacancyPage";
import {
    fetchVacanciesCreator,
    setMustFetchVacanciesCreator,
    sendResumeCreator,
} from "../../redux/VacancyReducer";


let mapStateToProps = (state) => {
    return {
        vacancies: state.vacancyPage.vacancies,
        mustFetch: state.vacancyPage.mustFetch
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
        sendResume: (vacancyId) => {
            dispatch(sendResumeCreator(vacancyId));
        }
    };
};

let VacancyPageContainer = connect(mapStateToProps, mapDispatchToProps)(ProductPage);

export default VacancyPageContainer;