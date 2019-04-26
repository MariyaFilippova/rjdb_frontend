import React from 'react';
import './App.css';
import Menu from "./Components/menu/Menu";
import Header from "./Components/header/Header";

import VacancyPageContainer from "./Components/vacancies/VacancyPageContainer";
import ResumePageContainer from "./Components/resumes/ResumePageContainer";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./Components/profile/Profile";

const App =  (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Menu />
               <Header />
               <div className='app-wrapper-content'>
                   <Route path = "/resumes" render = { () => <ResumePageContainer store = {props.store}/> }
                   />
                   <Route path= "/profile" render = { () => <Profile store = {props.store}/>}
                   />
                   <Route path= "/vacancies" render = { () => <VacancyPageContainer store = {props.store}/>}
                   />

               </div>
            </div>
        </BrowserRouter>
    );
};

export default App;

