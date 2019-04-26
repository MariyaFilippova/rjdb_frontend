
import React from 'react';
import Resume from "./item/Resume";
import s from './ResumePage.module.css';
import {NavLink} from "react-router-dom";
import Area from "./item/Area";

const ResumePage = (props) => {
    if (props.mustFetch) {
        props.fetchResumes();
        props.setMustFetch(false);
        props.fetchAreas()
    }



    const onAddResume = () =>
    {
        console.log('clicked');
        props.addResume();
    };
    const onResumeChange = (event) =>
    {
       props.resumeChange(event);
    };
    const onNameChange = (event) =>
    {
        props.nameChange(event);
    };
    const onAreaChange = (event) =>
    {
        props.selectArea(event);
    };


    let resumes = props.resumes
        .map((resume) => <Resume key={resume.id}
                                 id={resume.id}
                                 name={resume.name}
                                 resume = {resume.resume}/>
        );
    let areas = props.areas
        .map((area) => <Area key = {area.id}
                                 id={area.id}
                                 area = {area.area}/>
        );

        if (resumes.length === 0) {
            return (
                <div className={s.resumePageWrapper}>
                    <div className={s.noResume}>You don't have any resumes!</div>
                    <div className={s.resumeForm}>

                        <textarea className={s.area} onChange={onResumeChange}
                                                        value={props.resumeResume}
                                                         placeholder={'Enter information about your education and work experience:'}/>
                        <br/>
                        <textarea className={s.area}
                                                         onChange={onNameChange}
                                                         value={props.resumeName}
                                                         placeholder={'Enter name of vacancy:'}/>
                         <br/>
                         <div>
                            Select area:
                            <select  >
                                <option /> { areas.map((area) =>
                            {return <option key={area.id} value={area.area}> {area.text}>
                                {areas}
                                </option>
                            })
                            }
                            </select>
                         </div>

                        <button onClick={onAddResume}> Add Resume </button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={s.resumePageWrapper}>
                    <div className={s.addingNewResumeButton}>
                        <NavLink to = "/vacancies" activeClassName={s.active}> I want to find a job! </NavLink>
                    </div>

                        <div className={'s.resumeForm'}>
                              <textarea className={s.area} onChange={onResumeChange}
                                        value={props.resumeResume}
                                        placeholder={'Enter information about your education and work experience:'}/>
                            <br/>
                            <textarea className={s.area}
                                      onChange={onNameChange}
                                      value={props.resumeName}
                                      placeholder={'Enter name of vacancy:'}
                            />

                            <br/>
                            Select area:
                            <select value={props.resumeArea}
                                    onChange={onAreaChange}>
                                {areas}
                            </select>

                        </div>

                        <div>
                        <button className={s.button} onClick={onAddResume}> Add Resume </button>
                        </div>
                    <div className={'s.resumePage'}>
                        Your resumes:
                        {resumes}
                    </div>
                </div>

            )
        }
};

export default ResumePage;