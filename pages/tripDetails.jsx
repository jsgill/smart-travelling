import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/TripThree.module.css";
import left_arrow from "../public/images/trip/left_arrow.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TripDetails() {
    const [destinationPlace, setDestinationPlace] = useState([])
    const [userInterest, setUserInterest] = useState([]);
    const [userDetails, setUserDetails] = useState([])

    useEffect(() => {
        const user_dest = JSON.parse(localStorage.getItem('trip_one'));
        setDestinationPlace(user_dest)
        const user_interest = JSON.parse(localStorage.getItem('trip_two'));
        setUserInterest(user_interest)
        const tripThree = JSON.parse(localStorage.getItem('trip_three'));
        setUserDetails(tripThree)
    }, [])

    useEffect(() => {
        return () =>
            toast.success("Success, Done, Let's Go", {
                position: "top-right",
                autoClose: 3000
            });
        // eslint-disable-next-line
    }, [])

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
                                        <p>Interest</p>
                                        <p>Budget per person</p>
                                        <p>Start & End Date</p>
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
                                        <p>{userDetails.name}</p>
                                        <p>(+91) {userDetails.mobile}</p>
                                        <p>{destinationPlace.destination}</p>
                                        <p>{destinationPlace.guests}</p>
                                        <p>{userInterest.user_interest}</p>
                                        <p>₹ {userInterest.budget}</p>
                                        <p>{destinationPlace.startdate}, {destinationPlace.enddate}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}
export default TripDetails;