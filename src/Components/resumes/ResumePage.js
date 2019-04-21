
import React from 'react';
import Resume from "./item/Resume";
import s from './ResumePage.module.css';
import {NavLink} from "react-router-dom";

const ResumePage = (props) => {
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
        if (resumes.length === 0) {
            return (
                <div className={s.resumePageWrapper}>
                    <div className={s.noResume}>You don't have any resumes!</div>
                    <div className={s.addingNewResumeButton}>
                        <NavLink to = "/vacancies" activeClassName={s.active}> I want to find a job! </NavLink>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='s.resumePageWrapper'>
                    <div className={'s.resumePageGrid'}>
                        {resumes}
                    </div>
                </div>
            )
        }
};

export default ResumePage;