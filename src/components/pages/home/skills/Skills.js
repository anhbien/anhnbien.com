import React from 'react'
import './Skills.scss'
import data from '../../../../services/skills.json'

export default function Skills() {
    const publicUrl = process.env.PUBLIC_URL;
    const skills = data.Skills;
    return (
        <section className="skills container text-center mb-5">
            <div className="row">
                {
                    skills.length >0 && (
                        skills.map((skill,i)=>{
                                return (
                                    <div className="col-xs-12 col-sm-6" key={i}>
                                        <div className="card border-0"> <img src={publicUrl.concat(skill.icon)} className="card-img-top mx-auto" alt={skill.name}/>
                                            <div className="card-body">
                                                <h4 className="card-title"><strong>{skill.name}</strong></h4>
                                                <p className="card-text">{skill.discription}</p>
                                            </div>
                                            <ul className="list-group list-group-flush">
                                                {
                                                    skill.specialties.length > 0 && (
                                                        skill.specialties.map((specialty,j) => {
                                                            return (
                                                                <li className="list-group-item" key={j}>
                                                                    <ul className="list-unstyled">
                                                                        <li>
                                                                            <h5 className="text-blue">{specialty.name}</h5>
                                                                        </li>
                                                                        {specialty.specialty.length > 0 && (
                                                                            specialty.specialty.map((spec, k) =>{
                                                                                return <li key={k}>{spec.name}</li>
                                                                            })
                                                                        )}
                                                                    </ul>
                                                                </li>
                                                            )
                                                        })
                                                    )
                                                }
                                            </ul>
                                        </div>
                                </div>
                                )
                            }
                        )                        
                    )  
                }            
            </div>
        <a className="btn-blue m-1" role="button" href="https://drive.google.com/open?id=1iNhE60lobgnc08Mz82O0kHjnzm38qubh" rel="noopener noreferrer" target="_blank">Resume</a> 
        <a className="btn-blue m-1" role="button" href="https://www.linkedin.com/in/anhbien/" rel="noopener noreferrer" target="_blank">LinkedIn</a> 
    </section>
    )
}