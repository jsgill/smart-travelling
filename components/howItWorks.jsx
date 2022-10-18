

import React from 'react'
import styles from '../styles/howItWorks.module.css'
import Image from 'next/image'

function HowItWorks() {
    return (
        <div className='container pb-5'>
            <div className='row justify-content-center'>
                <div className={styles.home_works}><h1>How it works</h1></div>
            </div>
            <div className='row justify-content-center mb-2'>
                <div className='col-md-8'>
                    <Image src="https://ik.imagekit.io/ahsrg6khu/New_Folder/home/Rectangle_CK8eM906L.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666082884333" height="456px" width="664px" alt="angle" />
                </div>
                <div className='col-md-4'>
                    <div className={styles.home_needs1}>
                        <h1>Your Needs,<br /> Our Magic</h1>
                        <p>Share your trip requirements to <br /> feed our magical <br /> recommendation algorithm</p>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center' id={styles.laptop_div}>
                <div className='col-md-8 pb-3'>
                    <div className={styles.home_needs2}>
                        <h1>Start customising <br />
                            your itinerary</h1>
                        <p>Choose from a variety of stays <br /> & activities of your choice & <br /> budget</p>
                    </div>
                </div>
                <div className='col-md-4 text-center mb-5'>
                    <Image src="https://ik.imagekit.io/ahsrg6khu/New_Folder/home/Rectangle__1__AnelN1k9ZH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666082887010" height="400px" width="300px" alt="angle1" />
                </div>
            </div>
            <div className='row justify-content-center mb-2'>
                <div className='col-md-8'>
                    <Image src="https://ik.imagekit.io/ahsrg6khu/New_Folder/home/Rectangle__2__nfTEzYDhD.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666082881865" height="430px" width="621px" alt="angle3" />
                </div>
                <div className='col-md-4'>
                    <div className={styles.home_needs1}>
                        <h1>Tap once & book it all</h1>
                        <p>Do all your stay, activities& <br /> transport booking at just one <br /> click, at only 20% booking <br /> amount</p>
                    </div>
                </div>
            </div>


        </div >
    )
}

export default HowItWorks