import React, { Component } from 'react'
import './Skills.scss'
import FrontEndImg from '../../../../assets/images/frontend.svg'
import DesignerImg from '../../../../assets/images/designer.svg'

export default class Skills extends Component {
    render() {
        return (
            <section className="skills container text-center mb-5">
                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                    <div className="card border-0"> <img src={FrontEndImg} className="card-img-top mx-auto" alt="Font End Developer"/>
                        <div className="card-body">
                        <h4 className="card-title"><strong>Front-end Developer</strong></h4>
                        <p className="card-text">Cleanliness, maintainability, scalability are the most important coding qualities</p>
                        </div>
                        <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <ul className="list-unstyled">
                            <li>
                                <h5 className="text-blue">Languages</h5>
                            </li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>AngularJS</li>
                            <li>Bootstrap</li>
                            </ul>
                        </li>
                        <li className="list-group-item">
                            <ul className="list-unstyled">
                            <li>
                                <h5 className="text-blue">Dev Tools</h5>
                            </li>
                            <li>Git</li>
                            <li>TFS</li>
                            <li>Visual Studio</li>
                            <li>Dreamweaver</li>
                            </ul>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-xs-12 col-sm-6">
                    <div className="card border-0"> <img src={DesignerImg} className="card-img-top mx-auto" alt="Designer"/>
                        <div className="card-body">
                        <h5 className="card-title"><strong>Designer</strong></h5>
                        <p className="card-text">I value human-centered, interative, clean designs, and mimimalist structures</p>
                        </div>
                        <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <ul className="list-unstyled">
                            <li>
                                <h5 className="text-blue">Products</h5>
                            </li>
                            <li>Personas</li>
                            <li>User Journeys</li>
                            <li>Wireframes</li>
                            <li>Prototypes</li>
                            <li>Usability Testing</li>
                            </ul>
                        </li>
                        <li className="list-group-item">
                            <ul className="list-unstyled">
                            <li>
                                <h5 className="text-blue">Design Tools</h5>
                            </li>
                            <li>Balsamiq</li>
                            <li>Proto.io</li>
                            <li>Photoshop</li>
                            <li>Dreamveaver</li>
                            </ul>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
            <a className="btn-blue m-1" role="button" href="https://drive.google.com/open?id=1iNhE60lobgnc08Mz82O0kHjnzm38qubh" rel="noopener noreferrer" target="_blank">Resume</a> 
            <a className="btn-blue m-1" role="button" href="https://www.linkedin.com/in/anhbien/" rel="noopener noreferrer" target="_blank">LinkedIn</a> 
        </section>
        )
    }
}
