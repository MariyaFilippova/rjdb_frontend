import React from 'react';
import s from './Vacancy.module.css'

const Vacancy = (props) => {

    const sendResumeButtonClick = () => {
        props.sendResume(props.id);
    };

    return (
        <div className={'s.vacancy-wrapper'}>

            <div className={'s.vacancy-description'}>
                    {props.name}
                    {props.vacancy}
                    {props.company}
                    {props.area}
                    {props.status}
            </div>
            <div className={'s.sendingResumeButton'}>
                 onClick={sendResumeButtonClick}/>
            </div>
        </div>
    )
};

export default Vacancy;
