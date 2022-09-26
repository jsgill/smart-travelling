import React from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/TripThree.module.css";
import left_arrow from "../public/images/trip/left_arrow.png";
import trip_details_img from "../public/images/trip/trip_details_img.png";

function TripDetails() {
    return (
        <div>
            <div className={styles.main_container}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className={styles.happy_travling}>
                                <div>
                                    <p className={styles.happy_travel_p1}>Happy Travelling!</p>
                                </div>
                                <p className={styles.happy_travel_p2}>Erat egestas diam felis eget sit lectus.</p>
                                <div className={styles.main_back_btn11}>
                                    <Link href="/"><button className={styles.back_home_btn}><Image src={left_arrow} alt="arrow" /><span className={styles.back_btn11}>Back To Home</span></button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" id={styles.main_card_div}>
                            <div>
                                <p className={styles.trip_details_p}>Trip Detail</p>
                                <div className={styles.hr_line}></div>
                                <div className='d-flex'>
                                    <div className={styles.trip_user_p}>
                                        <p>Name</p>
                                        <p>Mobile Number</p>
                                        <p>Destination</p>
                                        <p>No of Guests</p>
                                        <p>Start & End Date</p>
                                        <p>Interest</p>
                                        <p>Budget per Person</p>
                                    </div>
                                    <div className={styles.trip_user_p}>
                                        <p>:</p>
                                        <p>:</p>
                                        <p>:</p>
                                        <p>:</p>
                                        <p>:</p>
                                        <p>:</p>
                                        <p>:</p>

                                    </div>
                                    <div className={styles.trip_user_p}>
                                        <p>Rohan Gupta</p>
                                        <p>+91 7734220098</p>
                                        <p>Manal</p>
                                        <p>2</p>
                                        <p>11Sep - 20 Sept, 2022</p>
                                        <p>Camping, Hiking</p>
                                        <p>₹ 10,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default TripDetails;