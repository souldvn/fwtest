import React, { useState } from 'react';
import Header from "./components/header/Header";
import GetApi from "./components/API/GetApi";
import './App.css'






function App() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };



    return (



        <div className={` ${darkMode ? "dark-mode" : ""}`}>
            <div className='app'>
                <Header onToggleDarkMode={toggleDarkMode} darkMode={darkMode} />
                <GetApi />
            </div>
        </div>


    );
}

export default App;
