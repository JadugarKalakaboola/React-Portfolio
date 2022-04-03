import React from 'react'
import '../styles/Contact.css'

export default function Contact(){
    return(
        <div className='contact-section' id='contact-section'>
            <h1 className='sub-head' style={{color: "var(--light-text)"}}>Any thought in your mind?</h1>
            <p className='text'>Share it with me!</p>
            <br></br><br></br>
            <a href='mailto: sid.sharma1704@gmail.com' className='button'>Say Hello</a>
            <br></br><br></br>
        </div>
    )
}