import React from 'react'
import styles from '../styles/dreamCall.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import group1 from '../public/images/home/Group 22104.png';
import group2 from '../public/images/home/Group 22103.png'
function DreamCall() {
    const responsive = {

        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className={styles.home_dream}>
                    <div className={styles.home_div_1}>Don’t call it a dream,</div>
                    <div className={styles.home_div_2}>call it a plan</div>
                    <p>Check out these trending attractions</p>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className="col-md-12">
                    <Carousel responsive={responsive} className={styles.demo} keyBoardControl={styles.arrow} >
                         <div className={styles.home_carousal_card}>
                            <div className={styles.bca}>
                                <Image src={group1} height="382px" width="351px"></Image>
                            </div>
                            <div className={styles.abc}>245 trips booked in last week</div>
                            <div className={styles.home_carousal_title}>DREAM VILLAGE</div>
                        </div> 
                        <div className={styles.home_carousal_card}>
                            <div className={styles.bca}>
                                <Image src={group2} height="382px" width="351px"></Image>
                            </div>
                            <div className={styles.abc}>Sssh, hidden gem just for you</div>
                            <div className={styles.home_carousal_title}>MANALI</div>
                        </div> 
                        <div className={styles.home_carousal_card}>
                            <div className={styles.bca}>
                                <Image src={group1} height="382px" width="351px"></Image>
                            </div>
                            <div className={styles.abc}>245 trips booked in last week</div>
                            <div className={styles.home_carousal_title}>DREAM VILLAGE</div>
                        </div> 
                        <div className={styles.home_carousal_card}>
                            <div className={styles.bca}>
                                <Image src={group2} height="382px" width="351px"></Image>
                            </div>
                            <div className={styles.abc}>Sssh, hidden gem just for you</div>
                            <div className={styles.home_carousal_title}>MANALI</div>
                        </div> 
                        <div className={styles.home_carousal_card}>
                            <div className={styles.bca}>
                                <Image src={group1} height="382px" width="351px"></Image>
                            </div>
                            <div className={styles.abc}>245 trips booked in last week</div>
                            <div className={styles.home_carousal_title}>DREAM VILLAGE</div>
                        </div> 
                        <div className={styles.home_carousal_card}>
                            <div className={styles.bca}>
                                <Image src={group2} height="382px" width="351px"></Image>
                            </div>
                            <div className={styles.abc}>Sssh, hidden gem just for you</div>
                            <div className={styles.home_carousal_title}>MANALI</div>
                           
                        </div> 
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default DreamCall