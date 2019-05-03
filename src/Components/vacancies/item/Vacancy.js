import React from 'react';
import s from './Vacancy.module.css'
import Resume from "../../resumes/item/Resume";

let Vacancy = (props) => {
    if (props.mustFetch) {
        props.fetchResumes();
        props.setMustFetch(false);
    }



    let resumes = props.resumes
        .map((resume) => <Resume key={resume.id}
                                 id={resume.id}
                                 name={resume.name}
                                 resume = {resume.resume}/>
        );
    console.log(resumes);

    return (
        <div className={s.vacancy_wrapper}>

            <div >
                Vacancy:
                <a className={s.vacancy}> {props.name}</a>
                    <br/>
                 Details:
                <a className={s.vacancy}> {props.vacancy}</a>
                    <br/>
                Area:
                <a className={s.vacancy}> {props.area}</a>
                    <br/>
                 Status:
                <a className={s.vacancy}>{props.status}</a>
                    <br/>
                 Company:
                <a className={s.vacancy}> {props.companyId}</a>
                    <br/>
                <a className={s.vacancy}> Choose your resume: </a>
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
    )
};

export default Vacancy;
