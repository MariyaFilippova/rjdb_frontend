import React from 'react';
import './App.css';
import Menu from "./Components/menu/Menu";
import Header from "./Components/header/Header";
import Profile from "./Components/profile/Profile"
import Resume from "./Components/resumes/item/Resume";
import {BrowserRouter, Route} from "react-router-dom";
import Vacancy from "./Components/vacancies/item/Vacancy";
const App =  (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Menu />
               <Header />
               <div className='app-wrapper-content'>
                   <Route path = "/resumes" render = { () => <Resume store = {props.store}/> }
                   />
                   <Route path= "/profile" render = { () => <Profile store = {props.store}/>}
                   />
                   <Route path= "/vacancies" render = { () => <Vacancy store = {props.store}/>}
                   />


               </div>
            </div>
        </BrowserRouter>
    );
};

export default App;

