import React from 'react'
import './Footer.scss'

export default function Footer() {
    return (
        <footer className="container-fluid text-center">
            <div className="container">
                <div className="row">
                <div className="col-12">
                    <p>{`Copyright © ${(new Date().getFullYear())} anhnbien.com`}</p>
                </div>
                </div>
            </div>
        </footer>
    )
}
