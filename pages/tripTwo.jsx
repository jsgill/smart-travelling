import React from 'react'
import Image from 'next/image'
import styles from '../styles/tripTwo.module.css'
import icon1 from "../public/images/tripTwo/Group 22133.png";
import icon2 from "../public/images/tripTwo/Group 22134.png";
import icon3 from "../public/images/tripTwo/Group 22135.png";
import rectangle1 from '../public/images/tripTwo/Rectangle 4574.png'
import rectangle2 from '../public/images/tripTwo/Rectangle 4575.png'

function TripTwo() {
    return (
        <div className={styles.tripTwo}>
            <div className='container'>
                <div className='text-center'>
                    <Image src={icon1} height="" width="" className='' />
                    <Image src={rectangle1} height="" width="" className='' />
                    <Image src={icon2} height="" width="" className='' />
                    <Image src={rectangle2} height="" width="" className='' />
                    <Image src={icon3} height="" width="" className='' />
                </div>
            </div>
        </div>



    )
}

export default TripTwo;