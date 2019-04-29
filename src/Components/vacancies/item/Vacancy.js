import React from 'react';
import s from './Vacancy.module.css'
import Resume from "../../resumes/item/Resume";

let Vacancy = (props) => {
    if (props.mustFetch) {
        props.fetchResumes();
        props.setMustFetch(false);
        props.setMustFetchResumes(false)
    }


    return (
        <div className={s.vacancy_wrapper}>


            <div className={s.vacancy_description}>
                <a className={s.definition}> Vacancy:</a>
                <a className={s.vacancy}> {props.name}</a>
                    <br/>
                <a className={s.definition}> Details: </a>
                <a className={s.vacancy}> {props.vacancy}</a>
                    <br/>
                <a className={s.definition}> Area: </a>
                <a className={s.vacancy}> {props.area}</a>
                    <br/>
                <a className={s.definition}> Status: </a>
                <a className={s.vacancy}>{props.status}</a>
                    <br/>
                <a className={s.definition}> Company: </a>
                <a className={s.vacancy}> {props.companyId}</a>
                <br/>

            </div>
        </div>
    )
};

export default Vacancy;
