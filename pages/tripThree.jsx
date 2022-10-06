import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Router from "next/router";
import styles from "../styles/TripThree.module.css";
import icon1 from "../public/images/tripTwo/Group 22133.png";
import icon2 from "../public/images/tripTwo/Group 22134.png";
import icon from "../public/images/tripTwo/Color.png";
import 'reactjs-popup/dist/index.css';
import axios from 'axios';

function TripThree() {
    const [name, setName] = useState("Enter Your Name (optional)");
    const [mobile, setMobile] = useState("Mobile Number");
    const [promo, setPromo] = useState("Promo Code (optional)");
    const [destinationPlace, setDestinationPlace] = useState({})
    const [interest11, setInterest11] = useState({});
    const [formError, setFormError] = useState("");
    const [dbRes, setDbRes] = useState("");
    const [userDetails, setUserDetails] = useState([]);

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

    const handleSubmit = () => {
        const obj = {
            name: '',
            mobile: '',
            promo: ''
        }
        obj.name = (name === "Enter Your Name (optional)" ? "-" : name)
        obj.mobile = mobile
        obj.promo = (promo === "Promo Code (optional)" ? "-" : promo)
        localStorage.setItem('trip_three', JSON.stringify(obj))
        axios({
            method: "POST",
            url: "https://formbold.com/s/6MM76",
            data: {
                "userInterests": interest11.user_interest,
                "userDestination": destinationPlace.destination,
                "journeyBudget": interest11.budget,
                "journeyStartingDate": destinationPlace.startdate,
                "journeyEndingDate": destinationPlace.enddate,
                "noOfGuests": destinationPlace.guests,
                "name": obj.name,
                "promo_code": obj.promo
            },
        })
            .then((r) => {
                console.log("data sent to formbold");
            }).catch((r) => {
                console.log("error");
            });
        fetch(`https://ap-south-1.aws.data.mongodb-api.com/app/smarttraveller-zapex/endpoint/userInput?mob=${obj.mobile}`, {
            method: "POST",
            body: JSON.stringify({
                "userInterests": interest11.user_interest,
                "userDestination": destinationPlace.destination,
                "journeyBudget": interest11.budget,
                "journeyStartingDate": destinationPlace.startdate,
                "journeyEndingDate": destinationPlace.enddate,
                "noOfGuests": destinationPlace.guests,
                "name": obj.name,
                "promo_code": obj.promo
            }),
            headers: { 'Content-Type': 'application/json' },
        }).then((result) => result.json())
            .then((response) => {
                console.log("++++response ++++++", response)
                setDbRes(response)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        if (dbRes) {
            Router.push({ pathname: "/tripDetails" });
        }
    }

    useEffect(() => {
        if (!mobile.length) {
            setFormError("");
        }
    }, [mobile]);

    const handleChange = event => {
        const result = event.target.value.replace(/\D/g, '');
        setMobile(result);
    };
    return (
        <div>
            <div className={styles.main_top_background}>
                <div className={styles.top_tripThree_padding}>
                    <div className="container">
                        <div
                            className="row pt-5 pb-5 justify-content-center"
                            id={styles.icon_main_row}>
                            <div className="col-1 p-0">
                                <Image src={icon1} alt="trip_section_logo" />
                            </div>
                            <div className="col-3 p-0">
                                {" "}
                                <div className={styles.tripThree_line}></div>
                            </div>
                            <div className="col-1 p-0">
                                {" "}
                                <Image src={icon2} alt="trip_section_logo" />
                            </div>
                            <div className="col-3 p-0">
                                {" "}
                                <div className={styles.tripThree_line}></div>
                            </div>
                            <div className="col-1 p-0">
                                <Image src={icon} alt="trip_section_logo" />
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className="row justify-content-center">
                            <div className="col-md-7 text-center">
                                <input
                                    type="text"
                                    id={styles.mobile_input}
                                    name="username"
                                    value={name}
                                    autoComplete='off'
                                    className={styles.trip_three_inputs}
                                    onChange={(e) => setName(e.target.value)}
                                    onFocus={(e) => (e.target.value = "")}
                                    onBlur={(e) => e.target.value = name}
                                />
                                <input
                                    type="text"
                                    maxLength={10}
                                    id={styles.mobile_input}
                                    value={mobile}
                                    autoComplete='off'
                                    className={styles.trip_three_inputs}
                                    onFocus={(e) => (e.target.value = "")}
                                    onChange={handleChange}
                                />
                                <p style={{ color: "red" }}>{formError}</p>
                                <input
                                    type="text"
                                    id={styles.mobile_input}
                                    value={promo}
                                    autoComplete='off'
                                    name="promoCode"
                                    className={styles.trip_three_inputs}
                                    onChange={(e) => setPromo(e.target.value)}
                                    onFocus={(e) => (e.target.value = "")}
                                    onBlur={(e) => e.target.value = promo}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-md-3'>
                                <div className={styles.trip_three_btn}>
                                    <button className={styles.trip_three_submit_btn} disabled={mobile === "Mobile Number"}
                                        onClick={handleSubmit}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TripThree;
