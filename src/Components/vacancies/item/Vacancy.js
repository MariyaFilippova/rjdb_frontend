import React from 'react';
import s from './Vacancy.module.css'


const Vacancy = (props) => {
    const onSendResume = (event) =>
    {
        props.sendResume(event);
    };

    if (props.mustFetch) {
        props.fetchResumes();
        props.setMustFetch(false);
    }


    return (
        <div className={s.vacancy_wrapper}>

            <div >
                Vacancy:
                {props.name}
                    <br/>
                 Details:
                {props.vacancy}
                    <br/>
                Area:
                {props.area}
                    <br/>
                 Status:
                {props.status}
                    <br/>
                 Company:
                {props.companyId}
                    <br/>

                <button className={s.button} onClick={onSendResume}> Send Resume </button>


            </div>
        </div>
    )
};

export default Vacancy;
