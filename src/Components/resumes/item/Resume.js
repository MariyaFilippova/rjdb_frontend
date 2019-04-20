
import React from 'react';
import s from './Resumes.module.css'




const Resume = (props) =>
 {
    /*let resumeEl =
        props.resumes.map(p => <ResumePage resume={p.resume}/>);

     let newResumeElement = React.createRef();
     let resumeOnChange = () => {
         let text = newResumeElement.current.value;
         props.updateNewResumeText(text );

     };
     let addResume =
         () => {
             let text = newResumeElement.current.value;
             props.addResume(text);
             props.updateNewResumeText ('');
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


        </div>
    )*/
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