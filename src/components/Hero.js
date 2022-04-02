import React from 'react'
import '../styles/Hero.css'
import Colors from '../data/Color.js'

export default function Hero(props){    
    const lightStyles = {
        color: "var(--dark-text)"
    }
    const darkStyles = {
        color: "var(--light-text)"
    }
    const [width , setWidth] = React.useState(window.innerWidth)
    
    return(
        <div className='hero-section section'>
            <p className="green-text medium" style= {{color:!props.dark ? Colors.blue : Colors.green}}>Hi, my name is</p>
            <h2 className='name big-text' style={!props.dark ? lightStyles : darkStyles}>Siddharth Sharma.</h2>
            <h2 className='sub-head big-text'>I build things for the web.</h2>
            <p className='paragraph dark-text'>I'm a school student addicted to programming. I like to create your experience at web memorable. Currently I am learning React and wish to become a full stack developer this year.</p>
            <br></br>
            <br></br>
            <br></br>
            <a href='mailto: sid.sharma1704@gmail.com' className='button'>Say Hello</a>
        </div>
    )
}