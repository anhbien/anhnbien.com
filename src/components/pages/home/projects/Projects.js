import React from 'react'
import {Link} from 'react-router-dom'
import './Projects.scss'
import PortfolioData from '../../../../services/portfolioData'

export default function Projects() {
    const portData= PortfolioData.map((item)=>{
        return(
            <div className="col-lg-6 col-xl-4 mt-4" key={item.id}>
                <div className="card"> 
                    <img src={item.thumbNailUrl} alt="" className="img-overlay img-fluid"/>
                    <div className="card-body overlay">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <Link href="#" className="btn">View</Link> </div>
                </div>
            </div>
        )
    })
    return (
        <section className="projects container mb-5">
            <h2 className="text-center">Projects</h2>
            <p className="text-center text-muted">These are my recent projects.&nbsp;
                    <a href="https://www.linkedin.com/in/anhbien/" target="_blank">Contact me on Linkedin</a> if you want to see more.
            </p>
            <div className="row">
                {portData}
            </div>
        </section>
    )
}
