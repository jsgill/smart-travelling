import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Router from "next/router";
import styles from "../styles/TripThree.module.css";
import icon1 from "../public/images/tripTwo/Group 22133.png";
import icon2 from "../public/images/tripTwo/Group 22134.png";
import icon from "../public/images/tripTwo/Color.png";
import 'reactjs-popup/dist/index.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from "react-google-recaptcha";

function TripThree() {
    const [name, setName] = useState("Enter Your Name (optional)");
    const [mobile, setMobile] = useState("Mobile Number");
    const [promo, setPromo] = useState("Promo Code (optional)");
    const [destinationPlace, setDestinationPlace] = useState({})
    const [userInterest, setUserInterest] = useState({});
    const [formError, setFormError] = useState("");
    const [userDetails, setUserDetails] = useState([]);
    const recaptchaRef = React.createRef();

    useEffect(() => {
        const user_dest = JSON.parse(localStorage.getItem('trip_one'));
        setDestinationPlace(user_dest)
        const user_interest = JSON.parse(localStorage.getItem('trip_two'));
        setUserInterest(user_interest)
        const three = JSON.parse(localStorage.getItem('trip_three'));
        setUserDetails(three)
    }, []);

    const handleChange = event => {
        const result = event.target.value.replace(/\D/g, '');
        setMobile(result);
        if (result.length < 10) {
            setFormError("Please enter 10 digit");
        }
        else {
            setFormError("")
        }
    };

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
        if (!recaptchaRef.current.getValue()) {
            toast.error("Captcha required !", { position: "bottom-center" });
        }
        else {
        axios({
            method: "POST",
            url: process.env.NEXT_PUBLIC_TRIP_DETAILS_URL,
            data: {
                "userInterests": userInterest.user_interest,
                "userDestination": destinationPlace.destination,
                "journeyBudget": userInterest.budget,
                "journeyStartingDate": destinationPlace.startdate,
                "journeyEndingDate": destinationPlace.enddate,
                "noOfGuests": destinationPlace.guests,
                "name": obj.name,
                "promo_code": obj.promo,
                "g-recaptcha-response": recaptchaRef.current.getValue()
            },
            headers: { 'Content-Type': 'application/json' },
        })
            .then((r) => {
                console.log("data sent to formbold");
            }).catch((r) => {
                console.log("error");
            });
        fetch(`https://ap-south-1.aws.data.mongodb-api.com/app/smarttraveller-zapex/endpoint/userInput?mob=${obj.mobile}`, {
            method: "POST",
            body: JSON.stringify({
                "userInterests": userInterest.user_interest,
                "userDestination": destinationPlace.destination,
                "journeyBudget": userInterest.budget,
                "journeyStartingDate": destinationPlace.startdate,
                "journeyEndingDate": destinationPlace.enddate,
                "noOfGuests": destinationPlace.guests,
                "name": obj.name,
                "promo_code": obj.promo
            }),
            headers: { 'Content-Type': 'application/json' },
        }).then((result) => result.json())
            .then((response) => {
                toast.success("Success, Done, Let's Go", {
                    position: "top-right"
                });
                console.log("++++response ++++++", response)
                if (response) {
                    Router.push({ pathname: "/tripDetails" });
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }

    }
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
                                    onChange={handleChange}
                                    onFocus={(e) => (e.target.value = "")}
                                    onBlur={(e) => e.target.value = mobile}
                                />
                                <span className={styles.mobile_validation_error}>{formError}</span>
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
                        <div className='row justify-content-center gx-0'>
                            <div className='col-md-3'>
                                <div className={styles.trip_three_btn}>
                                     <ToastContainer/>
                                    <ReCAPTCHA ref={recaptchaRef}
                                        sitekey={process.env.NEXT_PUBLIC_SITEKEY} />
                                    <button className={styles.trip_three_submit_btn} disabled={mobile === "Mobile Number"}
                                        onClick={handleSubmit}>Submit</button></div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TripThree;
