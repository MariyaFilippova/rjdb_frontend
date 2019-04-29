
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
                                 resume = {resume.resume}
                                 area_id = {resume.area_id}
                                 statusCode = {resume.status}
            />
        );
    console.log(resumes);

    let areas = props.areas
        .map((area) => <Area key = {area.area_id}
                                 id={area.area_id}
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
                            <select onChange={onAreaChange}
                                    value ={props.resumeAreaId}>
                                <option /> { areas.map((area) =>

                            {return <option key={area.props.id} value={area.props.id}> {area.props.area}>

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
                        </div>



                            <br/>
                            Select area:
                            <select value={props.resumeAreaId}
                                    onChange={onAreaChange}>
                                <option> </option>
                                {areas.map(area => {
                                    return (
                                        <option
                                            key={area.id} value = {area.props.area} >{area.props.area}
                                        </option>
                                    );
                                })}

                            </select>



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