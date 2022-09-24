import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/tripTwo.module.css'
import icon1 from "../public/images/tripTwo/Group 22133.png";
import icon2 from "../public/images/tripTwo/Group 22134.png";
import icon3 from "../public/images/tripTwo/Group 22135.png";
function TripTwo() {
    return (
        <div className={styles.tripTwo}>
            <div className='container'>
                <div className='row mb-5 justify-content-center' id={styles.icon_main_row}>
                    <div className='col-1 p-0'>
                        <Image src={icon1} alt="trip_section_logo" />
                    </div>
                    <div className='col-3 p-0'> <div className={styles.tripOne_line}></div></div>
                    <div className='col-1 p-0'> <Image src={icon2} alt="trip_section_logo" /></div>
                    <div className='col-3 p-0'>
                        <div className={styles.tripOne_line}></div>
                    </div>
                    <div className='col-1 p-0'>
                        <Image src={icon3} alt="trip_section_logo" />
                    </div>
                </div>
                <div className='row justify-content-center py-5'>
                    <div className='col-md-8'>
                        <input className={styles.input_field} />
                        <input name="place" className={styles.input_field} />
                        <input name="place" className={styles.input_field} />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-md-4 text-center'>
                        <Link href="/contact">
                            <button className={styles.save_btn}>
                                Save & Continue
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TripTwo;
