import React from 'react';
import Vacancy from "./item/Vacancy";
import s from "./VacancyPage.module.css";
import Resume from "../resumes/item/Resume";

let VacancyPage = (props) =>
{
    if (props.mustFetch) {
        props.fetchVacancies();
        props.fetchResumes();
        props.setMustFetch(false);

    }
    console.log(props.resumes);
    let resumes = props.resumes
        .map((resume) => <Resume key={resume.id}
                                 id={resume.id}
                                 name={resume.name}
                                 resume = {resume.resume}/>
        );



    let vacancies = props.vacancies


        .map(vacancy =>
            <Vacancy key={vacancy.id}
                                 id={vacancy.id}
                                 companyId = {vacancy.company_id}
                                 vacancy = {vacancy.vacancy}
                                 name={vacancy.name}
                                 area={ vacancy.area_id}
                                 status = {vacancy.statusCode}
                                 />);

    console.log(vacancies);


    return (
        <div className={s.vacancyPageWrapper}>

            <div className={s.vacancyPageMain}>
                {vacancies}
            </div>
            <select value={props.resumeArea}>
                <option> </option>
                {resumes.map(resume => {
                    return (
                        <option
                            key={resume.id}> {resume.resume}
                        </option>
                    );
                })}

            </select>

        </div>
    );

};

export default VacancyPage;