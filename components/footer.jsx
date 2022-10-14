import Image from 'next/image'
import React from 'react'
import styles from '../styles/footer.module.css'
import smart from '../public/images/home/Smart Traveller.png'
import media1 from '../public/images/home/Group 22067.png'
import media2 from '../public/images/home/Group 22068.png'
import mmw from "../public/images/footer/mmw_logo.png";
import Link from 'next/link'

function Footer() {
    return (
        <div className={styles.footer}>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-3'>
                        <div className={styles.footer_image}>
                            <Image src={smart} height="130px" width="130p" alt="footer" />
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className={styles.footer_image}>
                            <h4>Experience</h4>
                            <h4>My Trip</h4>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className={styles.footer_image}>
                            <Link href="/contact"><h4>Contact Us</h4></Link>
                            <h4>Blog</h4>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className={styles.footer_image3}>
                            <h4>Follow us on</h4>
                            <div>
                                <Link href="https://instagram.com/thesmartraveller.in?igshid=YmMyMTA2M2Y="><a target="_blank" className={styles.home_insta}><Image src={media2} width="60px" height="60px" alt="media" /></a></Link>
                                <Link href="https://www.linkedin.com/company/the-smart-traveller/?viewAsMember=true"><a target="_blank" className={styles.home_facebook}><Image src={media1} width="60px" height="60px" alt="media1" /></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className={styles.footer_copyright}>
                        <p>Copyright © 2022 Travel Company. All Rights Reserved</p>
                        <Link href="https://www.makemywebsite.com.au/">
                            <div className='d-flex justify-content-center'>
                                <Image src={mmw} alt="mmw_logo" height={10} width="50px" className={styles.mmw} /> <p className={styles.web_design}>Web Design Melbourne  Make My Website</p></div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer