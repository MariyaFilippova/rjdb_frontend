import React from 'react';
import s from './Header.module.css';

const Header =  () => {
    return (
        <div className= {s.header}>
            <h1 >
                <div className={s.rjdb}>
                Russian Job DataBase
                </div>
            </h1>

        </div>);


};
export default  Header;