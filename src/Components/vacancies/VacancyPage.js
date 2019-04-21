import React from 'react';
import Vacancy from "./item/Vacancy";
import s from "./VacancyPage.module.css";

let VacancyPage = (props) =>
{
    if (props.mustFetch) {
        props.fetchVacancies();
        props.setMustFetch(false);
    }

    let vacancies = props.vacancies
        .map(vacancy => <Vacancy key={vacancy.id}
                                 id={vacancy.id}
                                 company = {vacancy.companyId}
                                 vacancy = {vacancy.vacancy}
                                 name={vacancy.name}
                                 />);

    return (
        <div className={s.vacancyPageWrapper}>

            <div className={s.vacancyPageMain}>
                {vacancies}
            </div>

        </div>
    );

};

export default VacancyPage;