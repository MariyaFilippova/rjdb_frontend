
import React from 'react';
import s from './Resumes.module.css'




const Resume = (props) =>
 {
     return (
         <div className={'s.resume-wrapper'}>

             <div className={'s.resume-description'}>
                 {props.name}
                 {props.resume}
                 {props.photo}
                 {props.area}
                 {props.status}
             </div>
         </div>
     );
};

export default Resume