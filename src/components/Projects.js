import React from 'react'
import Data from '../data/Data.js'
import '../styles/Projects.css'

export default function Projects(){
    let Skills;
    const projects = Data.projects
    const projectsEl = projects.map((project, key) => {
        return(
            <div className='project'>
                <p className='project-head'>{project.name}</p>
                <p className='text'>{project.desc}</p>
                {
                    Skills = project.skills.map(skill => {
                        return(
                            <span className='project-skill'>{skill}</span>
                        )
                    })
                }
                <br></br>
                <br></br>
                {project.launched && <div><a href={project.livelink} className="project-link">Live Link</a>| <a href={project.github} className="project-link">Github link</a></div>}
                {!project.launched && <div>Coming Soon</div>}
            </div>
        )
    })
    return(
        <div className='project-section' id='project-section'>
            <h1 className='medium-text'>Projects</h1>
            <div className='project-grid'>
                {projectsEl}
            </div>
            <p className='view-more'>
                <a href="https://github.com/JadugarKalakaboola" className="project-link">View More</a>
            </p>
        </div>
    )
}