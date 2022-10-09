import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/TripThree.module.css";
import left_arrow from "../public/images/trip/left_arrow.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function TripDetails() {
    const [destinationPlace, setDestinationPlace] = useState("")
    const [userInterest, setUserInterest] = useState("");
    const [userDetails, setUserDetails] = useState("")
    useEffect(() => {
        const user_dest = JSON.parse(localStorage.getItem('trip_one'));
        setDestinationPlace(user_dest)
        const user_interest = JSON.parse(localStorage.getItem('trip_two'));
        setUserInterest(user_interest)
        const tripThree = JSON.parse(localStorage.getItem('trip_three'));
        setUserDetails(tripThree)
    }, [])
    return (
        <div>
            <div className={styles.main_container}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className={styles.happy_travling}>
                                <div>
                                    <p className={styles.happy_travel_p1}>Happy <br /> Travelling!</p>
                                </div>
                                <p className={styles.happy_travel_p2}>Erat egestas diam felis eget sit lectus.</p>
                            </div>
                            <div>
                                <Link href="/"><button className="btn btn-light rounded-pill" id={styles.back_home_btn}><i className="fa fa-long-arrow-left"></i><span className={styles.back_btn11}>Back To Home</span></button></Link>
                            </div>
                        </div>
                        <div className="col-md-6" >
                           <div className={styles.main_back_btn11}>
                           <div id={styles.main_card_div}>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className={styles.hr_line}>
                                                <p className={styles.trip_details_p}>Trip Detail</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row justify-content-center'>
                                        <div className='col-5'><b>Name</b></div>
                                        <div className='col-1'> <p>:</p></div>
                                        <div className='col-6'> <p>{userDetails.name}</p></div>
                                    </div>
                                    <div className='row justify-content-center'>
                                        <div className='col-5'><b>Mobile Number</b></div>
                                        <div className='col-1'><p>:</p></div>
                                        <div className='col-6'><p>(+91) {userDetails.mobile}</p></div>
                                    </div>
                                    <div className='row justify-content-center'>
                                        <div className='col-5'> <b>Destination</b></div>
                                        <div className='col-1'><p>:</p></div>
                                        <div className='col-6'><p>{destinationPlace.destination}</p></div>
                                    </div>
                                    <div className='row justify-content-center'>
                                        <div className='col-5'><b>No of Guests</b></div>
                                        <div className='col-1'><p>:</p></div>
                                        <div className='col-6'><p>{destinationPlace.guests}</p></div>
                                    </div>
                                    <div className='row justify-content-center'>
                                        <div className='col-5'><b>Interest</b></div>
                                        <div className='col-1'><p>:</p></div>
                                        <div className='col-6'><p>{userInterest.user_interest}</p></div>
                                    </div>
                                    <div className='row justify-content-center'>
                                        <div className='col-5'><b>Budget per person</b></div>
                                        <div className='col-1'><p>:</p></div>
                                        <div className='col-6'><p>₹ {userInterest.budget}</p></div>
                                    </div>
                                    <div className='row justify-content-center'>
                                        <div className='col-5'><b>Start & End Date</b></div>
                                        <div className='col-1'><p>:</p></div>
                                        <div className='col-6'><p>{destinationPlace.startdate}, {destinationPlace.enddate}</p></div>
                                    </div>
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