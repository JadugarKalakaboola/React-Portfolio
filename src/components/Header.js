import React from 'react'
import '../styles/Header.css'

export default function Header(props){
    
    return(
        <div className='header-section'>
            <div className='left-logo'>
                <img src="s-logo.png" className="logo-img"/>
            </div>
            <div>
                <ul className='links-navbar'>
                    <li><span className='green-text'>01.</span>About</li>
                    <li><span className='green-text'>02.</span>Work</li>
                    <li><span className='green-text'>03.</span>Contact</li>
                    <li><span className='theme-switch'><img src={props.dark ? "sun.png" : "moon.png"} onClick={props.onclick}></img></span></li>
                </ul>
            </div>
        </div>
    )
}