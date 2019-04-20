import React from 'react';
import Product from "./item/Vacancy";
import s from "./VacancyPage.module.css";

let VacancyPage = (props) =>
{
    if (props.mustFetch) {
        props.fetchVacancies();
        props.setMustFetch(false);
    }

    let vacancies = props.vacancies
        .map(vacancy => <Product key={vacancy.id}
                                 id={vacancy.id}
                                 name={vacancy.name}
                                 company = {vacancy.companyId}
                                 vacancy = {vacancy.vacancy}
                                 sendResume={props.sendResume}/>);

    return (
        <div className={'s.vacancyPageWrapper'}>

            <div className={'s.vacancyPageMain'}>
                {vacancies}
            </div>

        </div>
    );

};

export default VacancyPage;