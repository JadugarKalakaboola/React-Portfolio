import React from 'react'
import '../styles/About.css'
import Colors from '../data/Color.js'

export default function About(){
    console.log(Colors)
    return(
        <div className='about-section'>
            <div className='about-heading'>
                <span>About</span><span><hr></hr></span>
            </div>
        </div>
    )
}