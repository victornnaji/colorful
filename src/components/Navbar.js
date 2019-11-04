import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';

const Navbar = ({level, changeLevel}) => {
    return (
        <header className="Navbar">
            <div className="logo">
                <a href="null">ColorFul</a>
            </div>
            <span>Value: {level}</span>
            <div className="slider-container">
                <div className="slider">
                    <Slider defaultValue={level}
                    min ={100}
                    max ={900}
                    step={100}
                    onAfterChange = {changeLevel}/>
                </div>
            </div>
        </header>
    )
}

export default Navbar;
