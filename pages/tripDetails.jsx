import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/TripThree.module.css";
import left_arrow from "../public/images/trip/left_arrow.png";

function TripDetails() {
    const [destinationPlace, setDestinationPlace] = useState([])
    const [interest11, setInterest11] = useState([]);
    const [userDetails, setUserDetails] = useState([])

    useEffect(() => {
        const user_dest = JSON.parse(localStorage.getItem('trip_one'));
        if (user_dest) {
            setDestinationPlace(user_dest)
        }
        const user_interest = JSON.parse(localStorage.getItem('trip_two'));
        if (user_interest) {
            setInterest11(user_interest)
        }
        const three = JSON.parse(localStorage.getItem('trip_three'));
        if (three) {
            setUserDetails(three)
        }
    }, []);

    return (
       
            <div className={styles.main_container}>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-6 py-5">
                            <div className={styles.happy_travling}>
                                <p className={styles.happy_travel_p1}>Happy <br /> Travelling!</p>
                                <p className={styles.happy_travel_p2}>Erat egestas diam felis eget sit lectus.</p>
                            </div>
                        </div>
                        <div className="col-md-6 py-5">
                            <div id={styles.main_card_div}>
                                <div className='container'>
                                    <div className='row py-2'>
                                        <div className={styles.Trip_Details}>
                                            <div className={styles.h6}><h6>Trip Details</h6></div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <div className='row'>
                                                <div className='col-4'><p>Name</p></div>
                                                <div className='col-2'><p>:</p></div>
                                                <div className='col-6'><p>{!!userDetails ? userDetails.name : null}</p></div>
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className='row'>
                                                <div className='col-4'><p>Mobile</p></div>
                                                <div className='col-2'><p>:</p></div>
                                                <div className='col-6'> <p>+{!!userDetails ? userDetails.mobile : null}</p></div>
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className='row'>
                                                <div className='col-4'><p>Destination</p></div>
                                                <div className='col-2'><p>:</p></div>
                                                <div className='col-6'>  <p>{destinationPlace.destination}</p></div>
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className='row'>
                                                <div className='col-4'><p>Guests</p></div>
                                                <div className='col-2'><p>:</p></div>
                                                <div className='col-6'> <p>{!!destinationPlace ? destinationPlace.guests : null}</p></div>
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className='row'>
                                                <div className='col-4'><p>Interest</p></div>
                                                <div className='col-2'><p>:</p></div>
                                                <div className='col-6'><p>{!!interest11 ? interest11.user_interest : null}</p></div>
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className='row'>
                                                <div className='col-4'><p>Budget</p></div>
                                                <div className='col-2'><p>:</p></div>
                                                <div className='col-6'> <p>₹ {!!interest11 ? interest11.budget : null}</p></div>
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className='row'>
                                                <div className='col-4'><p>Start & End Date</p></div>
                                                <div className='col-2'><p>:</p></div>
                                                <div className='col-6'><p>{!!destinationPlace ? destinationPlace.startdate : null}, {!!destinationPlace ? destinationPlace.enddate : null}</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className={styles.main_back_btn11}>
                            <Link href="/"><button className={styles.back_home_btn}><Image src={left_arrow} alt="arrow" /><span className={styles.back_btn11}>Back To Home</span></button></Link>
                        </div>
                    </div>

                </div>
            </div>
        
    )
}
export default TripDetails;