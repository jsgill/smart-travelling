import React from 'react'
import Image from 'next/image'
import styles from '../styles/fullyFernished.module.css'

function FullyFurnished() {
    return (
        <div>
            <div className='container'>
                <div className='row justify-content-center' id={styles.home_cardSection}>
                    <div className="col-md-3">
                        <div className={styles.home_card}>
                            <div>
                                <Image src="https://ik.imagekit.io/ahsrg6khu/New_Folder/home/image_127_feWxw2tdb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666082886634" alt="home" width={45} height={45} />
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
                                <Image src="https://ik.imagekit.io/ahsrg6khu/New_Folder/home/image_128_JDvKxygNK-.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666082882161" alt="card" width={45} height={45} />
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
                                <Image src="https://ik.imagekit.io/ahsrg6khu/New_Folder/home/image_129_EPo65xX76o.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666082886984" alt="card2" width={45} height={45} />
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
                                <Image src="https://ik.imagekit.io/ahsrg6khu/New_Folder/home/image_130_6P1ziPmFx.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666082883727" alt="card3" width={45} height={45} />
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
