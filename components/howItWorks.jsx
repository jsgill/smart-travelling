import React from 'react'
import styles from '../styles/howItWorks.module.css'
import rectangle from '../public/images/home/Rectangle.png'
import rectangle1 from '../public/images/home/Rectangle (1).png'
import rectangle3 from '../public/images/home/Rectangle (2).png'
import Image from 'next/image'
function HowItWorks() {
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className={styles.home_works}><h1>How it works</h1></div>
            </div>
            <div className='row justify-content-center  flex-column-reverse flex-lg-row mb-2'>
                <div className='col-md-8'>
                    <Image src={rectangle} height="456px" width="664px" alt="angle" />
                </div>
                <div className='col-md-4'>
                    <div className={styles.home_needs1}>
                        <h1>Your Needs,<br /> Our Magic</h1>
                        <p>Share your trip requirements to <br /> feed our magical <br /> recommendation algorithm</p>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className={styles.home_needs2}>
                            <h1>Start customising <br />
                                your itinerary</h1>
                            <p>Choose from a variety of stays <br /> & activities of your choice & <br /> budget</p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <Image src={rectangle1} height="400px" width="300px" alt="angle1" />
                    </div>
                </div>
                <div className='row justify-content-center  flex-column-reverse flex-lg-row mb-2' id={styles.laptop_div}>
                    <div className='col-md-8'>
                        <Image src={rectangle3} height="430px" width="621px" alt="angle3" />
                    </div>
                    <div className='col-md-4'>
                        <div className={styles.home_needs1}>
                            <h1>Tap once & book it all</h1>
                            <p>Do all your stay, activities& <br /> transport booking at just one <br /> click, at only 20% booking <br /> amount</p>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default HowItWorks