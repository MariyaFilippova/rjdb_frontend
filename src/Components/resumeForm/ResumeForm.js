
import React from 'react';

import { Field, reduxForm } from 'redux-form';

const ResumeForm = (props) =>
{
    const {handleSubmit, reset} = props;

    const submit = (values) => console.log(values);

    return (
        <form onSubmit={handleSubmit(submit)}>

            <Field name="title" component="input" type="text"/>
            <Field name="text" component="input" type="text"/>
            <div>
                <button type="button" onClick={reset}>Очистить форму</button>
                <button type="submit">Отправить форму</button>
            </div>
        </form>
    );
};


export default ResumeForm;


