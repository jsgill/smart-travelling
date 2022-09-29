import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import cross from "../public/images/trip/cross.png";
import styles from "../styles/tripTwo.module.css";
import icon1 from "../public/images/tripTwo/Group 22133.png";
import icon2 from "../public/images/tripTwo/Group 22134.png";
import icon3 from "../public/images/tripTwo/Group 22135.png";
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

function TripTwo() {
  const [input1, setInput1] = useState(false);
  const [input2, setInput2] = useState(false);
  const [amount, setAmount] = useState("");
  const [changeColor, setChangeColor] = useState(true);
  const [firstColor, setFirstColor] = useState(true);
  const [secondColor, setSecondColor] = useState(true);
  const [thirdColor, setThirdColor] = useState(true);
  const [fourthColor, setFourthColor] = useState(true);
  const [fifthColor, setFifthColor] = useState(true);
  const [sixthColor, setSixthColor] = useState(true);
  const [seventhColor, setSeventhColor] = useState(true);
  const [eighthColor, setEighthColor] = useState(true);
  const [ninthColor, setNinthColor] = useState(true);
  const [tenthColor, setTenthColor] = useState(true);
  const [elevenColor, setElevenColor] = useState(true);
  const [text, setText] = useState([]);
  const [info, setInfo] = useState("");
  const [localStr, setLocalStr] = useState("")

  const toggleInput1 = () => {
    setInput1(!input1);
  };
  const toggleInput2 = () => {
    setInput2(!input2);
  };

  const handleAmount = (event) => {
    setAmount(event.target.value);
  };
  const handleBudgetAmount = (e) => {
    setAmount(e.target.value);
  };

  const demo = () => { };

  const saveBtn = () => {
    toggleInput2();
  };

  const handleChangeColor = (data) => {
    setText([...text, data]);
    setChangeColor(!changeColor);
  };
  const handleFirstColor = (data) => {
    setText([...text, data]);
    setFirstColor(!firstColor);
  };
  const handleSecondColor = (data) => {
    setText([...text, data]);
    setSecondColor(!secondColor);
  };
  const handleThirdColor = (data) => {
    setText([...text, data]);
    setThirdColor(!thirdColor);
  };
  const handleFourthColor = (data) => {
    setText([...text, data]);
    setFourthColor(!fourthColor);
  };
  const handleFifthColor = (data) => {
    setText([...text, data]);
    setFifthColor(!fifthColor);
  };
  const handleSixthColor = (data) => {
    setText([...text, data]);
    setSixthColor(!sixthColor);
  };
  const handleSeventhColor = (data) => {
    setText([...text, data]);
    setSeventhColor(!seventhColor);
  };
  const handleEighthColor = (data) => {
    setText([...text, data]);
    setEighthColor(!eighthColor);
  };
  const handleNinthColor = (data) => {
    setText([...text, data]);
    setNinthColor(!ninthColor);
  };
  const handleTenthColor = (data) => {
    setText([...text, data]);
    setTenthColor(!tenthColor);
  };
  const handleElevenColor = (data) => {
    setText([...text, data]);
    setElevenColor(!elevenColor);
  };
  const handleSubmit = () => {
    toggleInput1();
    var filter = text.filter(
      (item, index, array) => text.indexOf(item) === array.lastIndexOf(item)
    );
    setText(filter);
    for (let i = 0; i < filter.length; i++) {
      info = info.concat(filter[i]);
      if (i < filter.length - 1) {
        info = info.concat(", ");
      }
    }
    setInfo(info);
  };
  const handleSubmit_TripTwoData = () => {
    for (let j = 0; j < text.length; j++) {
      localStr = localStr.concat(text[j]);
      if (j < text.length - 1) {
        localStr = localStr.concat(", ")
      }
    }
    setLocalStr(localStr)
    const obj = {
      user_interest: localStr,
      budget: amount
    }
    localStorage.setItem("trip_two", JSON.stringify(obj));
  }

  return (
    <div className={styles.tripTwo}>
      <div className="container">
        <div
          className="row mb-5 justify-content-center"
          id={styles.icon_main_row}
        >
          <div className="col-1 p-0">
            <Image src={icon1} alt="trip_section_logo" />
          </div>
          <div className="col-3 p-0">
            <div className={styles.tripOne_line}></div>
          </div>
          <div className="col-1 p-0">
            <Image src={icon2} alt="trip_section_logo" />
          </div>
          <div className="col-3 p-0">
            <div className={styles.tripOne_line}></div>
          </div>
          <div className="col-1 p-0">
            <Image src={icon3} alt="trip_section_logo" />
          </div>
        </div>
        <div className="row justify-content-center py-5">
          <div className="col-md-8">
            <input
              value={info.length == 0 ? "Choose Interest" : text}
              onChange={demo}
              className={styles.input_field}
              onClick={toggleInput1}
            />
            <div style={{ display: input1 ? "block" : "none" }}>
              <div
                className="container"
                id={styles.tripTwo_inputtwo_container2}
              >
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
                  <div className="row jsutify-content-center">
                    <div className="col-xl-3  col-sm-4 " id={styles.column}>
                      <div
                        className={`${!changeColor
                          ? styles.camping_div_color
                          : styles.camping_div
                          }`}
                        onClick={() => handleChangeColor("camping")}>

                        <p className="py-2">
                          <Image
                            src={image1}
                            height={60}
                            width={60}
                            alt="camping"
                          />
                        </p>
                        <p className={styles.image_para_content}>Camping</p>
                      </div>
                    </div>
                    <div className="col-xl-3  col-sm-4 " id={styles.column}>
                      <div
                        className={`${!firstColor
                          ? styles.camping_div_color
                          : styles.camping_div
                          }`}
                        onClick={() => handleFirstColor("Hiking")}
                      >
                        <p className=" py-2">
                          <Image src={image2} height={60} width={60} alt="hiking" />
                        </p>
                        <p className={styles.image_para_content}>Hiking</p>
                      </div>
                    </div>
                    <div className="col-xl-3  col-sm-4 " id={styles.column}>
                      <div
                        className={`${!secondColor
                          ? styles.camping_div_color
                          : styles.camping_div
                          }`}
                        onClick={() => handleSecondColor("Offbeat")}
                      >
                        <p className=" py-2">
                          <Image
                            src={image3}
                            height={60}
                            width={60}
                            alt="offbeat"
                          />
                        </p>
                        <p className={styles.image_para_content}>Offbeat</p>
                      </div>
                    </div>
                    <div className="col-xl-3  col-sm-4 " id={styles.column}>
                      <div
                        className={`${!thirdColor
                          ? styles.camping_div_color
                          : styles.camping_div
                          }`}
                        onClick={() => handleThirdColor("Apple Orchards")}
                      >
                        <p className=" py-2">
                          <Image src={image4} height={60} width={60} alt="apple" />
                        </p>
                        <p className={styles.image_para_content}>Apple Orchards</p>
                      </div>
                    </div>
                    <div className="col-xl-3  col-sm-4" id={styles.column}>
                      <div
                        className={`${!fourthColor
                          ? styles.camping_div_color1
                          : styles.camping_div1
                          }`}
                        onClick={() => handleFourthColor("Biking")}
                      >
                        <p className=" py-2">
                          <Image src={image5} height={60} width={60} alt="biking" />
                        </p>
                        <p className={styles.image_para_content}>Biking</p>
                      </div>
                    </div>
                    <div className="col-xl-3  col-sm-4 " id={styles.column}>
                      <div
                        className={`${!fifthColor
                          ? styles.camping_div_color1
                          : styles.camping_div1
                          }`}
                        onClick={() => handleFifthColor("Forest")}
                      >
                        <p className=" py-2">
                          <Image src={image6} height={60} width={60} alt="forest" />
                        </p>
                        <p className={styles.image_para_content}>Forest</p>
                      </div>
                    </div>
                    <div className="col-xl-3  col-sm-4 " id={styles.column}>
                      <div
                        className={`${!sixthColor
                          ? styles.camping_div_color1
                          : styles.camping_div1
                          }`}
                        onClick={() => handleSixthColor("Historical")}
                      >
                        <p className=" py-2">
                          <Image
                            src={image7}
                            height={60}
                            width={60}
                            alt="historical"
                          />
                        </p>
                        <p className={styles.image_para_content}>Historical</p>
                      </div>
                    </div>
                    <div className="col-xl-3  col-sm-4 " id={styles.column}>
                      <div
                        className={`${!seventhColor
                          ? styles.camping_div_color1
                          : styles.camping_div1
                          }`}
                        onClick={() => handleSeventhColor("Romantic")}
                      >
                        <p className=" py-2">
                          <Image
                            src={image8}
                            height={60}
                            width={60}
                            alt="romantic"
                          />{" "}
                        </p>
                        <p className={styles.image_para_content}>Romantic</p>
                      </div>
                    </div>

                    <div className="col-3 ">
                      <div className={`${!eighthColor ? styles.camping_div_color1 : styles.camping_div1}`} onClick={() => handleEighthColor("Adventure")}>
                        <p className=" py-2">
                          <Image
                            src={image9}
                            height={60}
                            width={60}
                            alt="adventure"
                          />{" "}
                        </p>
                        <p className={styles.image_para_content}>Adventure</p>
                      </div>
                    </div>
                    <div className="col-xl-3  col-sm-4 " id={styles.column}>
                      <div
                        className={`${!ninthColor
                          ? styles.camping_div_color1
                          : styles.camping_div1
                          }`}
                        onClick={() => handleNinthColor("Offroading")}
                      >
                        <p className=" py-2">
                          <Image
                            src={image10}
                            height={60}
                            width={60}
                            alt="offroading"
                          />
                        </p>
                        <p className={styles.image_para_content}>Offroading</p>
                      </div>
                    </div>
                    <div className="col-xl-3  col-sm-4 " id={styles.column}>
                      <div
                        className={`${!tenthColor
                          ? styles.camping_div_color1
                          : styles.camping_div1
                          }`}
                        onClick={() => handleTenthColor("Traditional")}
                      >
                        <p className=" py-2">
                          <Image
                            src={image11}
                            height={60}
                            width={60}
                            alt="traditional"
                          />
                        </p>
                        <p className={styles.image_para_content}>Traditional</p>
                      </div>
                    </div>
                    <div className="col-xl-3  col-sm-4 " id={styles.column}>
                      <div
                        className={`${!elevenColor
                          ? styles.camping_div_color1
                          : styles.camping_div1
                          }`}
                        onClick={() => handleElevenColor("Waterfall")}
                      >
                        <p className=" py-2">
                          <Image
                            src={image12}
                            height={60}
                            width={60}
                            alt="waterfall"
                          />
                        </p>
                        <p className={styles.image_para_content}>Waterfall</p>
                      </div>
                    </div>
                  </div>
                </div>


                <div className={styles.tripone_inputtwo_btn_container3}>
                  <button
                    className={styles.tripTwo_inputtwo_btn}
                    onClick={handleSubmit}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>

            <input
              className={styles.input_field}
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
                  <Image
                    src={cross}
                    alt="cross"
                    height={12}
                    width={15}
                    className={styles.cross_image}
                  />
                </p>
                <div className={styles.tripTwo_inputTwo_input_container}>
                  <input
                    placeholder="Enter Amount"
                    onChange={handleAmount}
                    className={styles.tripTwo_inputTwo_input_container_input}
                    id={styles.enter_amount_input}
                  />
                </div>
                <div className={styles.tripTwo_input_container}>
                  <input
                    className={`${amount === "5,000"
                      ? styles.TripTwo_btn_container_btn2
                      : styles.TripTwo_btn_container_btn
                      }`}
                    onClick={(e) => handleBudgetAmount(e)}
                    value="5,000"
                    onChange={demo}
                    readOnly
                    id={styles.TripTwo_input_container_btn}
                  />
                  <input
                    className={`${amount === "10,000"
                      ? styles.TripTwo_btn_container_btn2
                      : styles.TripTwo_btn_container_btn
                      }`}
                    onClick={(e) => handleBudgetAmount(e)}
                    value="10,000"
                    onChange={demo}
                    readOnly
                    id={styles.TripTwo_input_container_btn}
                  />
                  <input
                    className={`${amount === "15,000"
                      ? styles.TripTwo_btn_container_btn2
                      : styles.TripTwo_btn_container_btn
                      }`}
                    onClick={(e) => handleBudgetAmount(e)}
                    value="15,000"
                    onChange={demo}
                    readOnly
                    id={styles.TripTwo_input_container_btn}
                  />
                  <input
                    className={`${amount === "20,000"
                      ? styles.TripTwo_btn_container_btn2
                      : styles.TripTwo_btn_container_btn
                      }`}
                    onClick={(e) => handleBudgetAmount(e)}
                    value="20,000"
                    onChange={demo}
                    readOnly
                    id={styles.TripTwo_input_container_btn}
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
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-3  col-sm-4 text-center">
            <Link href="/tripThree">
              <button className={styles.save_btn} disabled={!info || !amount} onClick={handleSubmit_TripTwoData}>
                Save & Continue
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripTwo;
