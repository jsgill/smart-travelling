import React from 'react'
import Image from 'next/image'
import styles from '../styles/fullyFernished.module.css'
import image127 from '../public/images/home/image 127.png'
import image128 from '../public/images/home/image 128.png'
import image129 from '../public/images/home/image 129.png'
import image130 from '../public/images/home/image 130.png'
function FullyFurnished() {
    return (
        <div>
            <div className='container'>
                <div className='row justify-content-center' id={styles.home_cardSection}>
                    <div className="col-md-3">
                        <div className={styles.home_card}>
                            <div>
                                <Image src={image127} alt="home" />
                            </div>
                            <div>
                                <h5>Fully Personalised</h5>
                                <p className={styles.fully_para}>Get hour-by-hour itinerary based
                                    on your interests & budget</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className={styles.home_card}>
                            <div>
                                <Image src={image128} alt="card" />
                            </div>
                            <div>
                                <h5>Fast & Free</h5>
                                <p className={styles.fully_para}>No more google searches to find
                                    the best deals,plan it for free</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className={styles.home_card}>
                            <div>
                                <Image src={image129} alt="card2" />
                            </div>
                            <div>
                                <h5>Save Extra</h5>
                                <p className={styles.fully_para}>Choose from the most affordable
                                    stays,activities and transport</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className={styles.home_card}>
                            <div>
                                <Image src={image130} alt="card3" />
                            </div>
                            <div>
                                <h5>Easy to Customise</h5>
                                <p className={styles.fully_para}>Shape the itinerary with your personal touch & manage all
                                    your bookings</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullyFurnished