import React from 'react';
import s from './Menu.module.css';
import {NavLink} from "react-router-dom";

const Menu =  () => {
    return (
            <div className = {s.menu}>
                <div className= {s.item} >
                    <NavLink to = "/profile" activeClassName={s.active}> Profile </NavLink>
                </div>
                <div className= {s.item}>
                    <NavLink to ="/resumes" activeClassName={s.active}> Resumes </NavLink>
                </div>
                <div className= {s.item}>
                    <NavLink to ="/vacancies" activeClassName={s.active}> Vacancies </NavLink>
                </div>
                <div className= {s.item}>
                    <NavLink to = "/log out" activeClassName={s.active}> Log out </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to = "/resumeform" activeClassName={s.active}> Sent Resume </NavLink>
                </div>
            </div>);


};
export default  Menu;