import React from 'react';
import s from './Header.module.css';

const Header =  () => {
    return (
        <div className= {s.header}>

                <h className = {s.text}>
                Russian Job DataBase
                    </h>
                    {/*<img className={s.img} src = "https://pp.userapi.com/c844417/v844417232/1e18f8/yPBob_4jBJE.jpg" height={100} width={100}/>*/}
        </div>);


};
export default  Header;