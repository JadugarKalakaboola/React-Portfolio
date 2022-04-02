import React from 'react'
import '../styles/Header.css'

export default function Header(props){
    const ScreenSizeDetector = require('screen-size-detector');
    // or
    //import ScreenSizeDetector from 'screen-size-detector';

    const screen = new ScreenSizeDetector(); // Default options

    return(
        <div className='header-section'>
            <div className='left-logo'>
             {screen.width>800 && <img src="s-logo.png" className="logo-img"/>}
            </div>
            <div>
                <ul className='links-navbar'>
                    <li><span className='green-text numbers'>01.</span>About</li>
                    <li><span className='green-text numbers'>02.</span>Projects</li>
                    <li><span className='green-text numbers'>03.</span>Contact</li>
                    <li><span className='theme-switch'><img src={props.dark ? "sun.png" : "moon.png"} onClick={props.onclick}></img></span></li>
                </ul>
            </div>
        </div>
    )
}