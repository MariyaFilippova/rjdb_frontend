import React from 'react';
import Vacancy from "./item/Vacancy";
import s from "./VacancyPage.module.css";


let VacancyPage = (props) =>
{
    if (props.mustFetch) {
        props.fetchVacancies();
        props.fetchResumes();
        props.setMustFetch(false);
    }

    let vacancies = props.vacancies
        .map(vacancy =>
            <Vacancy key={vacancy.id}
                                 id={vacancy.id}
                                 companyId = {vacancy.company_id}
                                 vacancy = {vacancy.vacancy}
                                 name = {vacancy.name}
                                 area ={ vacancy.area_id}
                                 status = {vacancy.status}
                                 resumes = {props.resumes}
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