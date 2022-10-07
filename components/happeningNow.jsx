import React from 'react'
import styles from '../styles/happeningNow.module.css'
import image1 from '../public/images/home/Rectangle 4554.png'
import image2 from '../public/images/home/Rectangle 4557.png'
import rightarrow from '../public/images/home/Arrow - Right 2.png'
import Image from 'next/image'
import Link from 'next/link'
function HappeningNow() {
    return (
        <div className='container mb-5'>
            <div className='row justify-content-center'>
                <div className={styles.home_happening}>
                    <h1>Happening Now.....</h1>
                </div>
            </div>
            <div className='row justify-content-center mx-2'>
                <div className='col-md-8 text-center'>
                    <div>
                        <div className='row'>
                            <div className='col-md-4'>
                                <Image src={image1} height="413px" width='279px' alt="tour" className={styles.happeningNow_images}></Image>
                            </div>
                            <div className='col-md-8 mb-5'>
                                <div className='container'>
                                    <div className={styles.home_mountain}>
                                        <h4>BBQ at hidden waterfall</h4>
                                        <p className={styles.sizzling}>Sizzling hot muchies out of barbecue,
                                            in the middle of nowhere waterfall</p>
                                        <div className={styles.demo}></div>
                                    </div>
                                    <div className='row pt-1'>
                                        <div className='col-6 text-start'><Link href="/tripOne">
                                            <a className={styles.home_explore} type="button">
                                                <span>Plan your Trip</span>
                                            </a>
                                        </Link></div>
                                        <div className='col-6 text-end'><Link href="/"><a className={styles.home_right_button}><Image src={rightarrow} height="24px" width="24px" alt="right"></Image></a></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 mt-2'>
                    <div>
                        <Image src={image2} height="220px" width="458px" alt="right-now" className={styles.happeningNow_images}></Image>
                        <div className='container mb-2'>
                            <div className={styles.saprater}>
                                <h4>Riverside camping at kasol </h4>
                                <p className={styles.sizzling}>A bad day camping is still better than a good day working</p>
                            </div>
                            <div className='row pt-1'>
                                <div className='col-6'><Link href="/tripOne">
                                    <a className={styles.home_explore} type="button">
                                        <span>Plan your Trip</span>
                                    </a>
                                </Link></div>
                                <div className='col-6 text-end'><Link href="/"><a className={styles.home_right_button}><Image src={rightarrow} height="24px" width="24px" alt="arrow"></Image></a></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HappeningNow
