import React from 'react';
import s from './Vacancy.module.css'
import {NavLink} from "react-router-dom";

const Vacancy = (props) => {
    if (props.hidden) {
        return null;
    }

    const sendResumeButtonClick = () => {
        props.sendResume(props.id);
    };

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
                <a className={s.vacancy}>{props.area_id}</a>
                    <br/>
                <a className={s.definition}> Status: </a>
                <a className={s.vacancy}>{props.status}</a>
                    <br/>
                <a className={s.definition}> Company: </a>
                <a className={s.vacancy}>{props.company_id}</a>
            </div>
            <button className={s.sendingResumeButton}>
                <NavLink to = "/resumeform" activeClassName={s.button}> Send a Resume {sendResumeButtonClick}</NavLink>
            </button>
        </div>
    )
};

export default Vacancy;
