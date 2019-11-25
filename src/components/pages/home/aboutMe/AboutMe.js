import React, { Component } from 'react'
import './AboutMe.scss'

export default class AboutMe extends Component {
    render() {
        return (
            <section className="aboutMe text-center pt-6 pb-6">
                <h2>It's always Anh never off</h2>
                <p className="offset-sm-4 col-xs-12 col-sm-4">I'm a UX Developer from Chicago, Illinois. I believe walking a mile in my clients' shoes is the best way to solve their problems.</p>
            </section>
        )
    }
}
