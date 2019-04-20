import React from 'react';
import s from './Header.module.css';

const Header =  () => {
    return (
        <div className= {s.header}>
            <h1 className={s.item}>
                Russian Job DataBase
                <img src = 'https://pp.userapi.com/c844417/v844417232/1e18f8/yPBob_4jBJE.jpg'/>;
            </h1>

        </div>);


};
export default  Header;