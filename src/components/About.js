import React from 'react'
import '../styles/About.css'
import Colors from '../data/Color.js'
import Data from '../data/Data.js'

export default function About(){
    const futurePlans = Data.about.plans
    const plansEL = futurePlans.map((plan, i) => {
        return <p className='section-text' key={i}>{plan}</p>
    })
    
    return(
        <div className='about-section section'>
            <h1 className='medium-text'>About</h1>
            <p className='about-text section-text'>
                {Data.about.text}
                <br></br>
                <br></br>
                <h1 className='sub-head'>Future Plans</h1>
                <br></br>
                {plansEL}
            </p>
        </div>
    )
}