import React, { Component } from 'react'
import Hero from './hero/Hero'
import AboutMe from './aboutMe/AboutMe'
import Skills from './skills/Skills'
// import Projects from './projects/Projects'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Hero/>
                <AboutMe/>
                <Skills/>
                {/* <Projects/> */}
            </div>
        )
    }
}
