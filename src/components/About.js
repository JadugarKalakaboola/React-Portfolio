import React from 'react'
import '../styles/About.css'
import Colors from '../data/Color.js'
import Data from '../data/Data.js'

export default function About(){
    
    return(
        <div className='about-section section'>
            <h1 className='medium-text'>About</h1>
            <p className='about-text section-text'>
                Hey! I am Siddharth and I started my programming journey in 2020. 
                I joined my school's Tech Club in 2021 which got me interested into Web develoment, 
                since then I haven't looked back and worked rigorously to improve my skills and learn new things.
                <br></br>
                <br></br>
                <h1 className='sub-head'>Future Plans</h1>
                <br></br>
                <p className='section-text'>Learning : Python • Node • C++ • Game develoment • React Native</p>
                <p className='section-text'>FreeLancing</p>
                <p className='section-text'>Participating in Tons of events</p>
            </p>
        </div>
    )
}