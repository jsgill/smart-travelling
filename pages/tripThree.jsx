import React, { useEffect, useState } from 'react';
import Image from "next/image";
import styles from "../styles/TripThree.module.css";
import icon1 from "../public/images/tripTwo/Group 22133.png";
import icon2 from "../public/images/tripTwo/Group 22134.png";
import icon from "../public/images/tripTwo/Color.png";
import Link from "next/link";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import popup_img from "../public/images/trip/popup_img.png"

function TripThree() {
    const [name, setName] = useState("Enter Your Name (optional)");
    const [mobile, setMobile] = useState("Mobile Number");
    const [promo, setPromo] = useState("Promo Code (optional)");
    const [open, setOpen] = useState(false)

    const handleSubmit = () => {
        const obj = {
            name: '',
            mobile: '',
            promo: ''
        }
        obj.name = name
        obj.mobile = mobile
        obj.promo = promo
        console.log("obj ===>", obj)
        localStorage.setItem('trip-three', JSON.stringify(obj))
        setOpen(true)
        // fetch('api call',{
        //     method: "POST",
        //     body: JSON.stringify(obj),
        //     headers: { 'Content-Type': 'application/json' },
        // }).then((result) => result.json())
        // .then((response) => {
        //     console.log(" response ++++++++", response)
        // })
    }
    return (
        <div>
            <div className={styles.main_top_background}>
                <div className={styles.top_tripThree_padding}>
                    <div className="container">
                        <div
                            className="row mb-5 justify-content-center"
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
                                <input type="text" autoComplete="off" value={name} name="username" className={styles.trip_three_inputs} onChange={(e) => setName(e.target.value)} onFocus={(e) => e.target.value = ""} />
                                <input type="text" autoComplete="off" maxLength={10} value={mobile} name="mobileNumber" className={styles.trip_three_inputs} onChange={(e) => setMobile(e.target.value)} onFocus={(e) => e.target.value = ""} />
                                <input type="text" autoComplete="off" value={promo} name="promoCode" className={styles.trip_three_inputs} onChange={(e) => setPromo(e.target.value)} onFocus={(e) => e.target.value = ""} />
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-md-3'>
                                <div className={styles.trip_three_btn}>
                                    <button className={styles.trip_three_submit_btn}
                                        disabled={name == "Enter Your Name (optional)" || mobile == "Mobile Number" || promo == "Promo Code (optional)"}
                                        onClick={handleSubmit}>Submit</button>
                                    {
                                        open ?
                                            <Popup position="top" open={open} contentStyle={{ borderRadius: "20px",width:"70%" }}>
                                                {
                                                    <div className={styles.model}>
                                                        <div className={styles.popup_img11}>
                                                            <Image src={popup_img} width="110px" height="110px" alt="popup" />
                                                        </div>
                                                        <p className={styles.header}>Success, Done, Let's Go</p>
                                                        <div className={styles.popup_view_details}>
                                                            <Link href="/tripDetails"><a><button className={styles.popup_btn}>View Details </button></a></Link>
                                                        </div>
                                                    </div>
                                                }
                                            </Popup> : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TripThree
