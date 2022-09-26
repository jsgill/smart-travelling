import React, { useState } from 'react';
import Image from "next/image";
import styles from "../styles/TripThree.module.css";
import tripOne_logo_1 from "../public/images/trip/tripOne_logo_1.png";
import tripOne_logo_2 from "../public/images/trip/tripOne_logo_2.png";
import tripThree_logo_3 from "../public/images/trip/trip_three_logo3.png";
import Link from "next/link";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import popup_img from "../public/images/trip/popup_img.png"

function TripThree() {
    const [name, setName] = useState("Enter Your Name (optional)");
    const [mobile, setMobile] = useState("Mobile Number");
    const [promo, setPromo] = useState("Promo Code (optional)");

    // const handleSubmit = () => {
    //     console.log("values ===>", name, mobile, promo)
    // }

    return (
        <div>
            <div className={styles.home_trip_img} >
                <div className={styles.tripThree_logo_container}>
                    <div className={styles.tripThree_line}>
                        <div className={styles.tripThree_logo}>
                            <Image
                                src={tripOne_logo_1}
                                alt="trip_section_logo"
                                height={22}
                                width={20}
                                className={styles.logo}
                            />
                        </div>
                    </div>
                    <div className={styles.tripThree_line}>
                        <div className={styles.tripThree_logo_1}>
                            <Image
                                src={tripOne_logo_2}
                                alt="trip_section_logo"
                                height={22}
                                width={20}
                                className={styles.logo}
                            />
                        </div>
                    </div>
                    <div className={styles.tripThree_logo_1}>
                        <Image
                            src={tripThree_logo_3}
                            alt="trip_section_logo"
                            height={22}
                            width={20}
                            className={styles.logo}
                        />
                    </div>
                </div>
                <div className={styles.three_inputs_container}>
                    <div className="container">
                        <div className="row">
                            <input type="text" autoComplete="off" value={name} name="username" className={styles.trip_three_inputs} onChange={(e) => setName(e.target.value)} onFocus={() => setName('')} />
                            <input type="text" autoComplete="off" value={mobile} name="mobileNumber" className={styles.trip_three_inputs} onChange={(e) => setMobile(e.target.value)} onFocus={() => setMobile('')} />
                            <input type="text" autoComplete="off" value={promo} name="promoCode" className={styles.trip_three_inputs} onChange={(e) => setPromo(e.target.value)} onFocus={() => setPromo('')} />
                        </div>
                        <div className={styles.trip_three_btn}>
                            <Popup modal trigger={<button className={styles.trip_three_submit_btn} >Submit</button>} position="top" contentStyle={{ borderRadius: "20px" }}>
                                {
                                    <div className={styles.model}>

                                        <div className={styles.popup_img11}>
                                            <Image src={popup_img} width="110px" height="110px" />
                                        </div>
                                        <p className={styles.header}>Success, Done, Let's Go</p>
                                        <div className={styles.popup_view_details}>
                                            <Link href="/tripDetails"><button className={styles.popup_btn}>View Details </button></Link>
                                        </div>
                                    </div>
                                }
                            </Popup>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TripThree
