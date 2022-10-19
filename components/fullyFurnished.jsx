import React from 'react';
import Image from 'next/image';
import styles from '../styles/fullyFernished.module.css';
import { budget_img, time_img, transport_img, customize_img } from "../public/imagesList/list"

function FullyFurnished() {
    return (
        <div>
            <div className='container'>
                <div className='row justify-content-center' id={styles.home_cardSection}>
                    <div className="col-md-3">
                        <div className={styles.home_card}>
                            <div>
                                <Image src={budget_img} alt="home" width={45} height={45} />
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
                                <Image src={time_img} alt="card" width={45} height={45} />
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
                                <Image src={transport_img} alt="card2" width={45} height={45} />
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
                                <Image src={customize_img} alt="card3" width={45} height={45} />
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
