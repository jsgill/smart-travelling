import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/tripTwo.module.css";
import icon1 from "../public/images/tripTwo/Group 22133.png";
import icon2 from "../public/images/tripTwo/Group 22134.png";
import icon3 from "../public/images/tripTwo/Group 22135.png";
function TripTwo() {
  const [input1, setInput1] = useState(false);
  const [input2, setInput2] = useState(false);
  const [changeColor, setChangeColor] = useState(false);
  const [amount, setAmount] = useState("");

  const toggleInput1 = () => {
    setInput1(!input1);
  };
  const toggleInput2 = () => {
    setInput2(!input2);
  };
  const handleChangeColor = () => {
    setChangeColor(!changeColor);
  };
  const handleAmount = (event) => {
    setAmount(event.target.value);
  };
  const handleBudgetAmount = (e) => {
    console.log("budget ======>", e.target.value);
    setAmount(e.target.value);
  };
  const demo = () => {};

  const saveBtn = () => {
    toggleInput2();
  };
  return (
    <div className={styles.tripTwo}>
      <div className="container">
        <div className="text-center">
          <Image src={icon1} alt="trip-two" />
          <Image src={icon2} alt="trip-two" />
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
              {/* <Image
                src={cross}
                alt="cross_image"
                height={12}
                width={15}
                className={styles.cross_image}
              /> */}
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
                  {/* <Image src={image1} height={50} width={50} /> */}
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
                  {/* <Image src={image2} height={50} width={50} /> */}
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
                  {/* <Image src={image3} height={50} width={50} /> */}
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
                  {/* <Image src={image4} height={50} width={50} /> */}
                </p>
                <p className={styles.image_para_content2}>Apple Orchards</p>
              </div>
            </div>
          </div>

          <input
            className={styles.tripTwo_input}
            onClick={toggleInput2}
            onChange={demo}
            value={amount.length === 0 ? "Budget Per Person" : amount}
          />
          <div
            style={{
              display: input2 ? "block" : "none",
            }}
          >
            <div
              className="container p-0"
              id={styles.tripTwo_inputtwo_container2}
            >
              <p className={styles.tripTwo_cross_para} onClick={toggleInput2}>
                {/* <Image
                  src={cross}
                  alt="cross_image"
                  height={12}
                  width={15}
                  className={styles.cross_image}
                /> */}
              </p>
              <div className={styles.tripTwo_inputTwo_input_container}>
                <input
                  placeholder="Enter Amount"
                  onChange={handleAmount}
                  className={styles.tripTwo_inputTwo_input_container_input}
                />
              </div>
              <div className={styles.tripTwo_input_container}>
                <input
                  className={`${
                    amount === "5,000"
                      ? styles.TripTwo_btn_container_btn2
                      : styles.TripTwo_btn_container_btn
                  }`}
                  onClick={(e) => handleBudgetAmount(e)}
                  value="5,000"
                  onChange={demo}
                />
                <input
                  className={`${
                    amount === "10,000"
                      ? styles.TripTwo_btn_container_btn2
                      : styles.TripTwo_btn_container_btn
                  }`}
                  onClick={(e) => handleBudgetAmount(e)}
                  value="10,000"
                  onChange={demo}
                />
                <input
                  className={`${
                    amount === "15,000"
                      ? styles.TripTwo_btn_container_btn2
                      : styles.TripTwo_btn_container_btn
                  }`}
                  onClick={(e) => handleBudgetAmount(e)}
                  value="15,000"
                  onChange={demo}
                />
                <input
                  className={`${
                    amount === "20,000"
                      ? styles.TripTwo_btn_container_btn2
                      : styles.TripTwo_btn_container_btn
                  }`}
                  onClick={(e) => handleBudgetAmount(e)}
                  value="20,000"
                  onChange={demo}
                />
              </div>
              <div className={styles.tripTwo_inputtwo_btn_container}>
                <button
                  className={styles.tripTwo_inputtwo_btn}
                  onClick={saveBtn}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.btn_container}>
          <button className={styles.save_btn}>Save & Continue</button>
        </div>
      </div>
    </div>
  );
}

export default TripTwo;
