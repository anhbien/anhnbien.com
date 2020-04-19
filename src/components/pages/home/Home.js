import React from 'react'
import Hero from './hero/Hero'
import AboutMe from './aboutMe/AboutMe'
import Skills from './skills/Skills'

export default function Home() {
    return (
        <div>
            <Hero/>
            <AboutMe/>
            <Skills/>
            {/* <Projects/> */}
        </div>
    )
}
