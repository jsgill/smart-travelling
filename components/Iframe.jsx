import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/dreamCall.module.css';
import cross from "../public/images/trip/cross.png";


function Iframe({ rref, ssrc }) {
    return (
        <div id={styles.ifram11}>
            <embed src={ssrc} style={{ height: "100vh", width: "90vw" }} ref={rref} className={styles.iframe_pdf}></embed>
            <div className={styles.cross_pdf}>
                <Image src={cross} width="20px" height="20px" alt="cross" className={styles.img_pdf} />
            </div>
        </div>

    )
}

export default Iframe
