import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/tripTwo.module.css";
import icon1 from "../public/images/tripTwo/Group 22133.png";
import icon2 from "../public/images/tripTwo/Group 22134.png";
import icon3 from "../public/images/tripTwo/Group 22135.png";
import rectangle1 from "../public/images/tripTwo/Rectangle4574.png";
import rectangle2 from "../public/images/tripTwo/Rectangle4575.png";
import image1 from "../public/images/tripTwo/image1.png";
import image2 from "../public/images/tripTwo/image2.png";
import image3 from "../public/images/tripTwo/image3.png";
import image4 from "../public/images/tripTwo/image4.png";
import image5 from "../public/images/tripTwo/image5.png";
import image6 from "../public/images/tripTwo/image6.png";
import image7 from "../public/images/tripTwo/image7.png";
import image8 from "../public/images/tripTwo/image8.png";
import image9 from "../public/images/tripTwo/image9.png";
import image10 from "../public/images/tripTwo/image10.png";
import image11 from "../public/images/tripTwo/image11.png";
import image12 from "../public/images/tripTwo/image12.png";
import cross from "../public/images/trip/cross.png";

function TripTwo() {
  const [input1, setInput1] = useState(false);
  const [changeColor, setChangeColor] = useState("");

  const toggleInput1 = () => {
    setInput1(!input1);
  };
  const handleChangeColor = () => {
    setChangeColor(!changeColor);
  };

  return (
    <div className={styles.tripTwo}>
      <div className="container">
        <div className="text-center">
          <Image src={icon1} alt="trip-two" />
          <Image src={rectangle1} alt="trip-two" />
          <Image src={icon2} alt="trip-two" />
          <Image src={rectangle2} alt="trip-two" />
          <Image src={icon3} alt="trip-two" />
        </div>
      </div>
      <div className={styles.tripTwo_input_Container}>
        <input
          defaultValue="Choose Intrest"
          className={styles.tripTwo_input}
          onClick={toggleInput1}
        />
        <div
          style={{
            display: input1 ? "block" : "none",
          }}
        >
          <div className="container p-0" id={styles.tripTwo_inputtwo_container}>
            <p className={styles.tripTwo_content}>Choose 1 or more</p>
            <p className={styles.tripTwo_cross_para} onClick={toggleInput1}>
              <Image
                src={cross}
                alt="cross_image"
                height={12}
                width={15}
                className={styles.cross_image}
              />
            </p>
            <div className={styles.image_display_container}>
              <div
                className={`styles.camping_div ${
                  changeColor === true
                    ? styles.camping_div_color
                    : styles.camping_div
                }`}
                onClick={handleChangeColor}
              >
                <p>
                  <Image src={image1} height={50} width={50} />
                </p>
                <p className={styles.image_para_content}>Camping</p>
              </div>
              <div
                className={`styles.camping_div ${
                  changeColor === true
                    ? styles.camping_div_color
                    : styles.camping_div
                }`}
                onClick={handleChangeColor}
              >
                <p>
                  <Image src={image2} height={50} width={50} />
                </p>
                <p className={styles.image_para_content}>Hiking</p>
              </div>
              <div
                className={`styles.camping_div ${
                  changeColor === true
                    ? styles.camping_div_color
                    : styles.camping_div
                }`}
                onClick={handleChangeColor}
              >
                <p>
                  <Image src={image3} height={50} width={50} />
                </p>
                <p className={styles.image_para_content}>Offbeat</p>
              </div>
              <div
                className={`styles.camping_div ${
                  changeColor === true
                    ? styles.camping_div_color1
                    : styles.camping_div1
                }`}
                onClick={handleChangeColor}
              >
                <p>
                  <Image src={image4} height={50} width={50} />
                </p>
                <p className={styles.image_para_content2}>Apple Orchards</p>
              </div>
            </div>
            <div className={styles.image_display_container}>
              <div
                className={`styles.camping_div ${
                  changeColor === true
                    ? styles.camping_div_color1
                    : styles.camping_div1
                }`}
                onClick={handleChangeColor}
              >
                <p>
                  <Image src={image5} height={50} width={50} />
                </p>
                <p className={styles.image_para_content}>Biking</p>
              </div>
              <div
                className={`styles.camping_div ${
                  changeColor === true
                    ? styles.camping_div_color1
                    : styles.camping_div1
                }`}
                onClick={handleChangeColor}
              >
                <p>
                  <Image src={image6} height={50} width={50} />
                </p>
                <p className={styles.image_para_content}>Forest</p>
              </div>
              <div
                className={`styles.camping_div ${
                  changeColor === true
                    ? styles.camping_div_color1
                    : styles.camping_div1
                }`}
                onClick={handleChangeColor}
              >
                <p>
                  <Image src={image7} height={50} width={50} />
                </p>
                <p className={styles.image_para_content}>Historical</p>
              </div>
              <div
                className={`styles.camping_div ${
                  changeColor === true
                    ? styles.camping_div_color1
                    : styles.camping_div1
                }`}
                onClick={handleChangeColor}
              >
                <p>
                  <Image src={image8} height={50} width={50} />
                </p>
                <p className={styles.image_para_content}>Romantic</p>
              </div>
            </div>
            <div className={styles.image_display_container}>
              <div
                className={`styles.camping_div ${
                  changeColor === true
                    ? styles.camping_div_color1
                    : styles.camping_div1
                }`}
                onClick={handleChangeColor}
              >
                <p>
                  <Image src={image9} height={50} width={50} />
                </p>
                <p className={styles.image_para_content}>Adventure</p>
              </div>
              <div
                className={`styles.camping_div ${
                  changeColor === true
                    ? styles.camping_div_color1
                    : styles.camping_div1
                }`}
                onClick={handleChangeColor}
              >
                <p>
                  <Image src={image10} height={50} width={50} />
                </p>
                <p className={styles.image_para_content}>Offroading</p>
              </div>
              <div
                className={`styles.camping_div ${
                  changeColor === true
                    ? styles.camping_div_color1
                    : styles.camping_div1
                }`}
                onClick={handleChangeColor}
              >
                <p>
                  <Image src={image11} height={50} width={50} />
                </p>
                <p className={styles.image_para_content}>Traditional</p>
              </div>
              <div
                className={`styles.camping_div ${
                  changeColor === true
                    ? styles.camping_div_color1
                    : styles.camping_div1
                }`}
                onClick={handleChangeColor}
              >
                <p>
                  <Image src={image12} height={50} width={50} />
                </p>
                <p className={styles.image_para_content}>Waterfall</p>
              </div>
            </div>
            <div className={styles.tripTwo_inputtwo_btn_container}>
              <button className={styles.tripTwo_inputtwo_btn}>Save</button>
            </div>
          </div>
        </div>

        <input
          defaultValue="Budget Per Person"
          className={styles.tripTwo_input}
        />
      </div>
      <div className={styles.btn_container}>
        <button className={styles.save_btn}>Save & Continue</button>
      </div>
    </div>
  );
}

export default TripTwo;
