
import React from 'react';
import Resume from "./item/Resume";
import s from './ResumePage.module.css';

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
    let resumeEl =
        props.resumes.map(p => <ResumePage resume={p.resume}/>);

    let newResumeElement = React.createRef();
    let resumeOnChange = () => {
        let text = newResumeElement.current.value;
        let action = updateNewResumeText(text);
        props.dispach(action);

    };
    let addResume =
        () => {
            props.addResume;
        };
    return (
        <div className={s.resume}>
            <div>
                <textarea onChange={resumeOnChange} ref={newResumeElement} value={props.newResumetext} />
            </div>
            <button onClick={addResume}> Add resume</button>
            <div>
                {resumeEl}
            </div>


        </div>);

    if (resumes.length === 0) {
        return (
            <div className={'s.noResumesMessage'}>
                You don't have any resumes!
                <img src = "https://cdn.pembrokeshire.gov.uk/images/apply-jobs-eng.jpg"/>
                <div className={'s.addingNewResumeButton'}>
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