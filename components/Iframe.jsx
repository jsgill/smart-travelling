import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/dreamCall.module.css';
import cross from "../public/images/trip/cross.png";
import Script from "next/script";

function Iframe({ rref, ssrc }) {

    useEffect(() => {
        <Script id='fdvfrerfe'>
            document.getElementById("theFrame").contentWindow.onload = function() {
                document.getElementsByTagName("img")[0].style.width = "100%"
            };
        </Script>


    }, [])

    return (
        <div id={styles.ifram11}>
            <iframe id="theFrame" src={ssrc} style={{ height: "1000px", width: "100%" }}></iframe>

            {/* <iframe src={ssrc} scrolling="no" style={{ height: "100vh", width: "90vw" }} ref={rref} className={styles.iframe}></iframe>
            <div className={styles.cross_pdf}>
                <Image src={cross} width="20px" height="20px" alt="cross" className={styles.img_pdf} />
            </div> */}
        </div>

    )
}

export default Iframe
