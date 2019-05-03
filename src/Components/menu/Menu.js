import React from 'react';
import s from './Menu.module.css';
import {NavLink} from "react-router-dom";

const Menu =  () => {
    return (
            <div className = {s.menu}>
                <div className= {s.item} >
                    <NavLink to = "/profile" activeClassName={s.active}> <b> Profile </b> </NavLink>
                </div>
                <div className= {s.item}>
                    <NavLink to ="/resumes" activeClassName={s.active}> <b> Resumes </b> </NavLink>
                </div>
                <div className= {s.item}>
                    <NavLink to ="/vacancies" activeClassName={s.active}> <b> Vacancies </b> </NavLink>
                </div>
                <div className= {s.item}>
                    <NavLink to = "/log out" activeClassName={s.active}> <b>Log out </b> </NavLink>
                </div>
            </div>);


};
export default  Menu;