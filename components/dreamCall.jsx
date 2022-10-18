import React from 'react'
import styles from '../styles/dreamCall.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Link from 'next/link';
import Image from 'next/image';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

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
    const popupOne = (url) => {
        if (typeof window !== "undefined") {
            const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
            const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;
            const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
            const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
            const systemZoom = width / window.screen.availWidth;
            const left = (width - 900) / 2 / systemZoom + dualScreenLeft
            const top = (height - 600) / 2 / systemZoom + dualScreenTop
            const newWindow = window.open(url, 'pdf',
                `
              scrollbars=yes,
              width=${900 / systemZoom},
              height=${600 / systemZoom},
              top=${top},
              left=${left}
              `
            )
            if (window.focus) newWindow.focus();
        }
    }
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className={styles.home_dream}>
                    <div className={styles.home_div_1}>Don’t call it a dream,</div>
                    <div className={styles.home_div_2}>call it a plan</div>
                    <p className='pt-2 pb-5'>Check out these trending attractions</p>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className="col-12">
                    <Carousel responsive={responsive} className={styles.demo} keyBoardControl={styles.arrow} >
                        <div className={styles.home_carousal_card} onClick={() => popupOne("https://drive.google.com/file/d/1Kzp-FsRHKG6z-FjjxuerPJ-1nmW_Okpj/view")}>
                            <div ><Image src="https://ik.imagekit.io/ahsrg6khu/New_Folder/home/slider1_Pmp9gZIX8.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666082886542" height="382px" width="351px" alt="bca" className={styles.bca}></Image>
                            </div>
                            <div className={styles.abc}>Offbeat Autumn Manali Trip</div>
                            <div className={styles.home_carousal_title}>ITINERARY</div>
                        </div>
                        <div className={styles.home_carousal_card}>
                            <div >

                                <Popup
                                    trigger={<Image src="https://ik.imagekit.io/ahsrg6khu/New_Folder/home/slider2_R88gpEC1Z.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666082881961" className="button" height="382px" width="351px" alt="group2" id={styles.bca2} ></Image>}
                                    modal
                                    className={styles.center_popup_open}
                                    contentStyle={{ width: "90vh", overflow: "hidden", backgroundSize: "cover" }} >
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
                                                        <div><Image src="https://ik.imagekit.io/ahsrg6khu/New_Folder/home/Ellipse_293_-47O5ii46.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666082882263" width="15px" height="15px" alt="circle"></Image> <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span></div>
                                                        <div><Image src="https://ik.imagekit.io/ahsrg6khu/New_Folder/home/Ellipse_293_-47O5ii46.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666082882263" height="15px" width="15px" alt="circle2"></Image> <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span></div>
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
                        <div className={styles.home_carousal_card} onClick={() => popupOne("https://drive.google.com/file/d/1YZx_IcOmylGlcp8WN0pkqK82ARXiJ8Wg/view")}>
                            <div ><Image src="https://ik.imagekit.io/ahsrg6khu/New_Folder/home/slider3_vF27bGc8pt.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666082884748" height="382px" width="351px" alt="bca" className={styles.bca3}></Image>
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