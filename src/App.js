import React from 'react';
import './App.css';
import Menu from "./Components/menu/Menu";
import Header from "./Components/header/Header";
const App =  () => {
    return (

        <div className='app-wrapper'>

           <Menu />
           <Header />
        </div>
    );
};

export default App;

