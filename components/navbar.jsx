import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
                <div className="container">
                    <Link href="/">
                        <a className="navbar-brand d-flex">
                            <Image src="https://ik.imagekit.io/ahsrg6khu/New_Folder/home/Group_18260_EfqzL2iFB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666082884284" height="50%" width="50%" alt="navbar" />
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