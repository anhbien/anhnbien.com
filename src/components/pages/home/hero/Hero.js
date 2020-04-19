import React from 'react'
import './Hero.scss'
import FaceVideo from '../../../../assets/images/face.mp4'
import HeroImg from '../../../../assets/images/hero.svg'

export default function Hero() {
    return (
        <section className="text-center mt-5 container">
            <h1>Anh Bien</h1>
            <h5>UX Developer</h5>
            <video width="320" height="240" autoPlay muted loop>
                <source src={FaceVideo} type="video/mp4"/>
                Your browser does not support the video tag. </video>
            <div><img src={HeroImg} alt="hero" className="img-fluid hero"/></div>
        </section>
    )
}
