
import React from 'react';
import Resume from "./item/Resume";
import s from './ResumePage.module.css';

const ResumePage = (props) => {

    let resumes = props.resumes
        .map((resume) => <Resume key={resume.id}
                                 id={resume.id}
                                 name={resume.name}
                                 resume = {resume.resume}/>
                                 );

    if (resumes.length === 0) {
        return (
            <div className={'s.noResumesMessage'}>
                You don't have any resumes!
                <img src = "https://cdn.pembrokeshire.gov.uk/images/apply-jobs-eng.jpg"/>
                <div className={s.addingNewResumeButton}>
                    <a href = "http://localhost:3000/vacancies" >  I want to find a job! </a>
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