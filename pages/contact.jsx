import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Contact.module.css";
import user_one from "../public/images/contact/Rectangle 4409.png";
import user_two from "../public/images/contact/Rectangle 4411.png";
import envelope_img from "../public/images/contact/envelope.png";
import group_img from "../public/images/contact/Group.png";
import vector_img from "../public/images/contact/Vector.png";
import contact_img11 from "../public/images/contact/contact_phone.png";
import mail_img from "../public/images/contact/mail.png";
import linkdin_img from "../public/images/contact/linkdin.png";
import insta_img from "../public/images/contact/insta.png";
import facebook_img from "../public/images/contact/facebook.png";
import Navbar from "../components/navbar"
import Link from "next/link";
import Footer from "../components/footer";
import { useForm } from "react-hook-form";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import popup_img from "../public/images/trip/popup_img.png";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    const recaptchaRef = React.createRef();
    const [open, setOpen] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onTouched" });
    const onSubmit = (data) => {
        const { name, phone, message } = data
        console.log(!recaptchaRef.current.getValue());
        if (!recaptchaRef.current.getValue()) {
            toast.error("Captcha required !", { position: "bottom-center" });
        }
        else {
            setOpen(true)
            axios({
                method: "POST",
                url: process.env.NEXT_PUBLIC_CONTACT_US_URL,
                data: {
                    "name": name,
                    "number": phone,
                    "message": message,
                    "g-recaptcha-response": recaptchaRef.current.getValue()
                },
                headers: { 'Content-Type': 'application/json' },
            }).then((res) => {
                console.log("data sent to formbold");
            }).catch((error) => {
                console.log("error");
            });
        }
    }
    return (
        <div>
            <Navbar />
            <div className="container-fluid" id={styles.main_contact_container}>
                <div className={styles.contact_image}>
                    <h1 className={styles.contact_tourist_care}>TOURIST CARE</h1>
                </div>
            </div>
            <div className={styles.contact_all_div11}>
                <div className={styles.contact_second_div}>
                    <div className="container" id={styles.contact_second_container}>
                        <h1 className={styles.contact_founding_team}>Founding Team</h1>
                        <div className={styles.contact_all_card}>
                            <div className="row text-center">
                                <div className="col-lg-6">
                                    <div className="justify-content-center">
                                        <div className="card" id={styles.contact_card_one}>
                                            <div className={styles.contact_user_one}>
                                                <Image src={user_one} width="214px" height="214px" alt="user-one" />
                                            </div>
                                            <div className="card-body p-0 text-center">
                                                <p className="card-title" id={styles.contact_card_title}>Nihal Choudhary</p>
                                                <div className={styles.text_div}>
                                                    <small className="card-text" id={styles.contact_card_text}>Co-Founder, Product IITK'21</small>
                                                </div>
                                                <div className={styles.all_icons}>
                                                    <div id={styles.user_icons}>
                                                        <Link href='mailto:nihal@thesmartraveller.com'>
                                                            <a target="_blank"><Image src={envelope_img} alt="envelope" /></a>
                                                        </Link>
                                                    </div>
                                                    <div id={styles.user_icons}>
                                                        <Link href="https://instagram.com/nihilistic___?igshid=YmMyMTA2M2Y">
                                                            <a target="_blank"><Image src={group_img} alt="envelope" /></a>
                                                        </Link>
                                                    </div>
                                                    <div id={styles.user_icons}>
                                                        <Link href="https://www.linkedin.com/in/nihalchoudhary">
                                                            <a target="_blank">
                                                                <Image src={vector_img} alt="envelope" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6" id={styles.contact_second_user22}>
                                    <div className="justify-content-center">
                                        <div className="card" id={styles.contact_card_one}>
                                            <div>
                                                <Image src={user_two} width="214px" height="214px" alt="user-two" />
                                            </div>
                                            <div className="card-body p-0 text-center">
                                                <p className="card-title" id={styles.contact_card_title}>Dhruv Sihag</p>
                                                <div className={styles.text_div}>
                                                    <small className="card-text" id={styles.contact_card_text}>Co-Founder, Operations IITK'21</small>
                                                </div>
                                                <div className={styles.all_icons}>
                                                    <div id={styles.user_icons}>
                                                        <Link href="mailto:dhruv@thesmartraveller.com">
                                                            <a target="_blank"><Image src={envelope_img} alt="envelope" /></a>
                                                        </Link>

                                                    </div>
                                                    <div id={styles.user_icons}>
                                                        <Link href="https://instagram.com/_dhruvsihag?igshid=YmMyMTA2M2Y">
                                                            <a target="_blank"><Image src={group_img} alt="envelope" /></a>
                                                        </Link>
                                                    </div>
                                                    <div id={styles.user_icons}>
                                                        <Link href="https://www.linkedin.com/in/dhruv-sihag-99a1b91a0">
                                                            <a target="_blank">
                                                                <Image src={vector_img} alt="envelope" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" id={styles.contact_info_container}>
                    <div className="text-center" id={styles.contact_parent_div}>
                        <p className={styles.contact_user_h1}>Contact Us</p>
                        <p className={styles.contact_user_para}>Our team is here to help you make the most of your time with us!</p>
                    </div>
                    <div className={styles.contact_info11}>
                        <div className="row" id={styles.contact_info22}>
                            <div className="col-lg-6" id={styles.contact_number_card11}>
                                <div className={styles.contact_number_card}>
                                    <span><Image src={contact_img11} width="20.64px" height="20.64px" alt="contact" /></span>
                                    <span className={styles.contact_number}>+91 7807021868</span>
                                </div>
                                <div className={styles.contact_number_card} id={styles.contact_main_mail}>
                                    <span className={styles.contact_mail_img11}><Image src={mail_img} width="24.45px" height="15.px" alt="mail" /></span>
                                    <span className={styles.contact_gmail}>smartestraveller@gmail.com</span>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={styles.contact_main_channel}>
                                    <p className={styles.contact_channel_text}>Our Channel</p>
                                </div>
                                <div className="d-flex justify-content-end" id={styles.contact_social11}>
                                    <div className={styles.contact_social_icon}>
                                        <Image src={facebook_img} alt="facebook" />
                                    </div>
                                    <div className={styles.contact_social_icon}>
                                        <Link href="https://instagram.com/thesmartraveller.in?igshid=YmMyMTA2M2Y">
                                            <a target="_blank">
                                                <Image src={insta_img} alt="insta" />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className={styles.contact_social_icon}>
                                        <Link href="https://www.linkedin.com/company/the-smart-traveller/?viewAsMember=true">
                                            <a target="_blank">
                                                <Image src={linkdin_img} alt="linkdin" />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className={styles.contact_your_details}>
                        <p className={styles.contact_your_text}>Your Details:</p>
                        <div className="row">
                            <div className="col-lg-6">
                                <input type="text" placeholder="Your name" autoComplete="off" name="name" className={styles.contact_inputs11} defaultValue=""
                                    {...register("name",
                                        {
                                            required: true,
                                        }
                                    )} />
                                {errors.name?.type === "required" && (<small style={{ color: "red" }}>Enter your name</small>)}
                            </div>
                            <div className="col-lg-6" id={styles.contact_ph_info}>
                                <input type="text" placeholder="Phone number" autoComplete="off" name="phone" maxLength={10} className={styles.contact_inputs22} defaultValue=""
                                    {...register("phone", {
                                        required: true,
                                        pattern: /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i
                                    })} />
                                {errors.phone?.type === "required" && (<small style={{ color: "red" }}>Enter your phone number</small>)}
                                {errors.phone?.type === "pattern" && (<small style={{ color: "red" }}>Only ten digit numbers are allowed</small>)}
                            </div>
                            <div className="col-lg-12">
                                <textarea type="text" placeholder="Message" autoComplete="off" name="message" className={styles.contact_message_input} defaultValue=""
                                    {...register("message", {
                                        required: true,
                                    })} />
                                {errors.message?.type === "required" && (<small style={{ color: "red" }}>Enter your message</small>)}

                            </div>
                        </div>
                        <div className={styles.contact_main_btn}>
                            <div className="pt-4 text-center">
                                <ToastContainer />
                                <div><ReCAPTCHA ref={recaptchaRef}
                                sitekey={process.env.NEXT_PUBLIC_SITEKEY} /></div>
                                <button className={styles.contact_submit_btn} onClick={handleSubmit(onSubmit)}>Submit</button>
                            </div>

                            {
                                open ?
                                    <Popup position="top" open={open} contentStyle={{ borderRadius: "20px", width: "60%" }}>
                                        {
                                            <div className={styles.model}>
                                                <div className={styles.popup_img11}>
                                                    <Image src={popup_img} width="110px" height="110px" alt="popup" />
                                                </div>
                                                <p className={styles.header}>Thanks for contacting us! We will get in touch with you shortly.</p>
                                                <div className={styles.popup_view_details}>
                                                    <Link href="/"><a><button className={styles.popup_btn}>Success</button></a></Link>
                                                </div>
                                            </div>
                                        }
                                    </Popup> : null
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
