import React from 'react';
import Vacancy from "./item/Vacancy";
import s from "./VacancyPage.module.css";
import Resume from "../resumes/item/Resume";


let VacancyPage = (props) => {
    if (props.mustFetch) {
        props.fetchVacancies();
        props.fetchResumes();
        props.setMustFetch(false);
    }

    let vacancies = props.vacancies
        .map(vacancy =>
            <Vacancy key={vacancy.id}
                     id={vacancy.id}
                     companyId={vacancy.company_id}
                     vacancy={vacancy.vacancy}
                     name={vacancy.name}
                     area={vacancy.area_id}
                     status={vacancy.status}
                     resumes={props.resumes}
            />);

    let resumes = props.resumes
        .map((resume) => <Resume key={resume.id}
                                 id={resume.id}
                                 name={resume.name}
                                 resume = {resume.resume}/>
        );
    return (
        <div className={s.main_container}>
            {vacancies.map((v) =>
                <div className={s.f}>
                    <div className={s.card}>
                        {v.props.name}
                        <br/>
                        {v.props.vacancy}
                        <br/>
                        {v.props.statusCode}
                        <br/>
                        {v.props.area_id}
                    </div>
                    <div className={s.back_card}>
                        <div className={s.vacancy}> Choose your resume: </div>
                        <select className={s.select} value={props.id}>
                            <option> </option>
                            {resumes.map(resume => {
                                return (
                                    <option
                                        key={resume.props.id} > {resume.props.resume}
                                    </option>
                                );
                            })}
                        </select>

                    </div>
                </div>
            )}
        </div>);
};
export default VacancyPage;