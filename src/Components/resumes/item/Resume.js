
import React from 'react';
import s from './Resumes.module.css';
import Status from "./Status";


const Resume = (props) =>
 {
     console.log(props.statusCode);
     return (

             <div className={s.resume_wrapper}>


                 <div className={s.resume_description}>
                     <a className={s.definition}> Vacancy:</a>
                     <a className={s.resume}> {props.name}</a>
                     <br/>
                     <a className={s.definition}> Details: </a>
                     <a className={s.resume}> {props.resume}</a>
                     <br/>
                     <a className={s.definition}> Area: </a>
                     <a className={s.resume}> {props.area_id}</a>
                     <br/>
                     <a className={s.definition}> Status: </a>
                     <Status status = {props.statusCode}/>
                     <br/>
                 </div>
             </div>

     );
};

export default Resume;