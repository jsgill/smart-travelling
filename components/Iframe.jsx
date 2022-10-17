import React from 'react';
import Image from 'next/image';
import styles from '../styles/dreamCall.module.css';
import cross from "../public/images/trip/cross.png";

function Iframe({ rref, ssrc }) {
    return (
        <div id={styles.ifram11}>
            <iframe src={ssrc} scrolling="no" style={{ height: "100vh", width: "90vw" }} ref={rref} ></iframe>
            <div className={styles.cross_pdf}>
                <Image src={cross} width="20px" height="20px" alt="cross" className={styles.img_pdf} />
            </div>
        </div>

    )
}

export default Iframe
