import React from 'react'
import '../styles/Header.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Header(props){


    return(
        <div className='header-section'>
            <div className='left-logo'>
            <img src="s-logo.png" className="logo-img"/>
            </div>
            <div>
                <ul className='links-navbar'>
                    <AnchorLink href='#about-section'>
                        <li><span className='green-text numbers'>01.</span>About</li>
                    </AnchorLink>
                    <AnchorLink href='#project-section'>
                        <li><span className='green-text numbers'>02.</span>Projects</li>
                    </AnchorLink>
                    <AnchorLink href='#contact-section'>
                        <li><span className='green-text numbers'>03.</span>Contact</li>
                    </AnchorLink>
                    <li><span className='theme-switch'><img src={props.dark ? "sun.png" : "moon.png"} onClick={props.onclick}></img></span></li>
                </ul>
            </div>
        </div>
    )
}