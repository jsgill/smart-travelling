import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/images/home/Group 18260.png'
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light">
                <div className="container">
                    <Link href="/">
                        <a className="navbar-brand d-flex">
                            <Image src={logo} height="50px" width="50px" alt="navbar" />
                            <div className='smart'>The Smart Traveller</div>
                        </a>
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link href="/">
                                    <a className="nav-link">Experiences</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/">
                                    <a className="nav-link">My Trip</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contact">
                                    <a className="nav-link">Contact Us</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/">
                                    <a className="nav-link">Blog</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar