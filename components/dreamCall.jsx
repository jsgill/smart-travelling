import React, { useEffect, useState } from 'react'
import styles from '../styles/dreamCall.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Link from 'next/link';
import Image from 'next/image';
import slider1 from "../public/images/home/slider1.jpg";
import slider2 from "../public/images/home/slider2.png";
import slider3 from "../public/images/home/slider3.png";
import circle from '../public/images/home/Ellipse 293.png'
import Popup from 'reactjs-popup';
import Iframe from './Iframe';
import 'reactjs-popup/dist/index.css';
import { useRef } from 'react';

function DreamCall() {
    const [pdf, setPdf] = useState(false);
    const [pdf2, setPdf2] = useState(false);
    const imgRef = useRef(null);

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
    useEffect(() => {
        let handler = (e) => {
            console.log("img ref ===>", imgRef)
            if (!imgRef.current?.contains(e.target)) {
                setPdf(false)
                setPdf2(false)
            }
        }
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler)
        }
    }, [])

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className={styles.home_dream}>
                    <div className={styles.home_div_1}>Don’t call it a dream,</div>
                    <div className={styles.home_div_2}>call it a plan</div>
                    <p className='pt-2 pb-5'>Check out these trending attractions</p>
                </div>
            </div>
            <div className='row justify-content-center' id={styles.iframe_div}>
                {
                    pdf ? <Iframe rref={imgRef} ssrc="https://docs.google.com/gview?url=https://pdf-data-travel.s3.ap-south-1.amazonaws.com/manali-offbeat-autumn+trip.pdf&embedded=true" /> : null
                }
                {
                    pdf2 ? <Iframe rref={imgRef} ssrc="https://docs.google.com/gview?url=https://pdf-data-travel.s3.ap-south-1.amazonaws.com/manali-kasol+trip.pdf&embedded=true" /> : null
                }

                <div className="col-12">
                    <Carousel responsive={responsive} className={styles.demo} keyBoardControl={styles.arrow} >
                        <div className={styles.home_carousal_card} onClick={() => setPdf(true)} ref={imgRef}>
                            <div ><Image src={slider1} height="382px" width="351px" alt="bca" className={styles.bca}></Image>
                            </div>
                            <div className={styles.abc}>Offbeat Autumn Manali Trip</div>
                            <div className={styles.home_carousal_title}>ITINERARY</div>
                        </div>
                        <div className={styles.home_carousal_card}>
                            <div>
                                <Popup
                                    trigger={<Image src={slider2} className="button" height="382px" width="351px" alt="group2" id={styles.bca2} ></Image>}
                                    modal
                                    className={styles.center_popup_open}
                                    contentStyle={{ width: "90vh", overflow: "hidden", backgroundSize: "cover" }}>
                                    {close => (
                                        <div className={styles.modal}>
                                            <button className={styles.close} onClick={close}>
                                                &times;
                                            </button>
                                            <div className={styles.content}>
                                                <div className='row justify-content-center pt-3'>
                                                    <div className='col-8'>
                                                        <div className={styles.group3}>
                                                        </div>
                                                    </div>
                                                    <div className='col-4 '>
                                                        <div className={styles.group4}>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row justify-content-center'>
                                                    <div className={styles.home_popup_title}>
                                                        <h2>Manali</h2>
                                                    </div>
                                                    <div className={styles.home_popup_para}>
                                                        <div><Image src={circle} width="15px" height="15px" alt="circle"></Image> <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span></div>
                                                        <div><Image src={circle} height="15px" width="15px" alt="circle2"></Image> <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span></div>
                                                    </div>

                                                    <div className={styles.Popup_bottom_button}>
                                                        <Link href="/tripOne">
                                                            <a className="btn" id={styles.home_popup_planYourTrip} type="button">
                                                                <span>Plan your Trip</span>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Popup>
                            </div>
                            <div className={styles.abc}>132 trips booked last week
                            </div>
                            <div className={styles.home_carousal_title}>MANALI</div>
                        </div>
                        <div className={styles.home_carousal_card} onClick={() => setPdf2(true)} ref={imgRef}>
                            <div ><Image src={slider3} height="382px" width="351px" alt="bca" className={styles.bca3}></Image>
                            </div>
                            <div className={styles.abc}>Kasol - Manali Weekend Gateway</div>
                            <div className={styles.home_carousal_title}>ITINERARY</div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
export default DreamCall