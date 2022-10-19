import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/tripTwo.module.css";
import 'reactjs-popup/dist/index.css';
import { trip_one_calender, trip_two_location, trip_one_pencil, trip_one_bg, camping, hiking, offbeat, biking, forest, apple, historial, romantic, adventure, offroading, traditional, waterfall } from "../public/imagesList/list";

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
  const [inputVal, setinputVal] = useState([])

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
  const handleData = (data) => {
    const dataInd = text.indexOf(data)
    if (dataInd == -1 && text.length < 1) {
      setText([...text, data])
    } else if (dataInd != -1 && text.length == 1) {
      setText([])
    } else {
      dataInd == -1 ? setText([...text, data]) : setText([...text.slice(0, dataInd), ...text.slice(dataInd + 1)])
    }
  }
  const handleChangeColor = (data) => {
    handleData(data)
    console.log("Asdfasdf", data)
    setChangeColor(!changeColor);
  };
  const handleFirstColor = (data) => {
    handleData(data)
    setFirstColor(!firstColor);
  };
  const handleSecondColor = (data) => {
    handleData(data)
    setSecondColor(!secondColor);
  };
  const handleThirdColor = (data) => {
    handleData(data)
    setThirdColor(!thirdColor);
  };
  const handleFourthColor = (data) => {
    handleData(data)
    setFourthColor(!fourthColor);
  };
  const handleFifthColor = (data) => {
    handleData(data)
    setFifthColor(!fifthColor);
  };
  const handleSixthColor = (data) => {
    handleData(data)
    setSixthColor(!sixthColor);
  };
  const handleSeventhColor = (data) => {
    handleData(data)
    setSeventhColor(!seventhColor);
  };
  const handleEighthColor = (data) => {
    handleData(data)
    setEighthColor(!eighthColor);
  };
  const handleNinthColor = (data) => {
    handleData(data)
    setNinthColor(!ninthColor);
  };
  const handleTenthColor = (data) => {
    handleData(data)
    setTenthColor(!tenthColor);
  };
  const handleElevenColor = (data) => {
    handleData(data)
    setElevenColor(!elevenColor);
  };
  const handleSubmit = () => {
    toggleInput1();
    setinputVal(text)
  };
  const handleSubmit_TripTwoData = () => {
    const obj = {
      user_interest: inputVal,
      budget: amount
    }
    console.log("obj -->", obj)
    localStorage.setItem("trip_two", JSON.stringify(obj));
  }
  return (
    <div className={styles.tripTwo} style={{ backgroundImage: `url(${trip_one_bg})` }}>
      <div className="container">
        <div
          className="row mb-5 justify-content-center"
          id={styles.icon_main_row}>
          <div className="col-1 p-0">
            <Image src={trip_one_calender} alt="trip_section_logo" width={80} height={80} />
          </div>
          <div className="col-3 p-0">
            <div className={styles.tripOne_line}></div>
          </div>
          <div className="col-1 p-0">
            <Image src={trip_two_location} alt="trip_section_logo" width={80} height={80} />
          </div>
          <div className="col-3 p-0">
            <div className={styles.tripOne_line}></div>
          </div>
          <div className="col-1 p-0">
            <Image src={trip_one_pencil} alt="trip_section_logo" width={80} height={80} />
          </div>
        </div>
        <div className="row justify-content-center py-5">
          <div className="col-md-7">

            <div className={styles.home_carousal_card}>
              <div className={styles.bca}>
                <input
                  value={inputVal.length == 0 ? "Choose Interest" : inputVal}
                  onChange={demo}
                  className={styles.input_field}
                  onClick={toggleInput1}
                  isSearchable={false}
                />
                <div style={{ display: input1 ? "block" : "none" }} id={styles.intrest_popup} readOnly>
                  <div className={styles.modal}>
                    <div className="row justify-content-center">
                      <p className={styles.tripTwo_content}>Choose 3 or more</p>
                      <p className={styles.tripTwo_cross_para} onClick={toggleInput1}>
                        <button type="button" class="btn-close" aria-label="Close"></button>
                      </p>
                      <div className="col-xl-3 col-sm-3" id={styles.column}>
                        <div
                          className={`${!changeColor
                            ? styles.camping_div_color
                            : styles.camping_div
                            }`}
                          onClick={() => handleChangeColor("Camping")}
                        >
                          <p className=" py-2">
                            <Image src={camping} height={60} width={60} alt="camping" />
                          </p>
                          <p className={styles.image_para_content}>Camping</p>
                        </div>
                      </div>
                      <div className="col-xl-3 col-sm-3" id={styles.column}>
                        <div
                          className={`${!firstColor
                            ? styles.camping_div_color
                            : styles.camping_div
                            }`}
                          onClick={() => handleFirstColor("Hiking")}
                        >
                          <p className=" py-2">
                            <Image src={hiking} height={60} width={60} alt="hiking" />
                          </p>
                          <p className={styles.image_para_content}>Hiking</p>
                        </div>
                      </div>
                      <div className="col-xl-3 col-sm-3 " id={styles.column}>
                        <div
                          className={`${!secondColor
                            ? styles.camping_div_color
                            : styles.camping_div
                            }`}
                          onClick={() => handleSecondColor("Offbeat")}
                        >
                          <p className=" py-2">
                            <Image
                              src={offbeat}
                              height={60}
                              width={60}
                              alt="offbeat"
                            />
                          </p>
                          <p className={styles.image_para_content}>Offbeat</p>
                        </div>
                      </div>
                      <div className="col-xl-3 col-sm-3" id={styles.column}>
                        <div
                          className={`${!thirdColor
                            ? styles.camping_div_color
                            : styles.camping_div
                            }`}
                          onClick={() => handleThirdColor("Apple Orchards")}
                        >
                          <p className=" py-2">
                            <Image src={apple} height={60} width={60} alt="apple" />
                          </p>
                          <p className={styles.image_para_content3}>Apple Orchards</p>
                        </div>
                      </div>
                      <div className="col-xl-3 col-sm-3" id={styles.column}>
                        <div
                          className={`${!fourthColor
                            ? styles.camping_div_color1
                            : styles.camping_div1
                            }`}
                          onClick={() => handleFourthColor("Biking")}
                        >
                          <p className=" py-2">
                            <Image src={biking} height={60} width={60} alt="biking" />
                          </p>
                          <p className={styles.image_para_content}>Biking</p>
                        </div>
                      </div>
                      <div className="col-xl-3 col-sm-3" id={styles.column}>
                        <div
                          className={`${!fifthColor
                            ? styles.camping_div_color1
                            : styles.camping_div1
                            }`}
                          onClick={() => handleFifthColor("Forest")}
                        >
                          <p className=" py-2">
                            <Image src={forest} height={60} width={60} alt="forest" />
                          </p>
                          <p className={styles.image_para_content}>Forest</p>
                        </div>
                      </div>
                      <div className="col-xl-3 col-sm-3" id={styles.column}>
                        <div
                          className={`${!sixthColor
                            ? styles.camping_div_color1
                            : styles.camping_div1
                            }`}
                          onClick={() => handleSixthColor("Historical")}>
                          <p className="py-2">
                            <Image
                              src={historial}
                              height={60}
                              width={60}
                              alt="historical"
                            />
                          </p>
                          <p className={styles.image_para_content}>Historical</p>
                        </div>
                      </div>
                      <div className="col-xl-3 col-sm-3" id={styles.column}>
                        <div
                          className={`${!seventhColor
                            ? styles.camping_div_color1
                            : styles.camping_div1
                            }`}
                          onClick={() => handleSeventhColor("Romantic")}
                        >
                          <p className=" py-2">
                            <Image
                              src={romantic}
                              height={60}
                              width={60}
                              alt="romantic"
                            />
                          </p>
                          <p className={styles.image_para_content}>Romantic</p>
                        </div>
                      </div>
                      <div className="col-xl-3 col-sm-3" id={styles.column}>
                        <div
                          className={`${!eighthColor
                            ? styles.camping_div_color1
                            : styles.camping_div1
                            }`}
                          onClick={() => handleEighthColor("Adventure")}
                        >
                          <p className=" py-2">
                            <Image
                              src={adventure}
                              height={60}
                              width={60}
                              alt="adventure"
                            />
                          </p>
                          <p className={styles.image_para_content}>Adventure</p>
                        </div>
                      </div>
                      <div className="col-xl-3 col-sm-3" id={styles.column}>
                        <div
                          className={`${!ninthColor
                            ? styles.camping_div_color1
                            : styles.camping_div1
                            }`}
                          onClick={() => handleNinthColor("Offroading")}
                        >
                          <p className=" py-2">
                            <Image
                              src={offroading}
                              height={60}
                              width={60}
                              alt="offroading"
                            />
                          </p>
                          <p className={styles.image_para_content}>Offroading</p>
                        </div>
                      </div>
                      <div className="col-xl-3 col-sm-3" id={styles.column}>
                        <div
                          className={`${!tenthColor
                            ? styles.camping_div_color1
                            : styles.camping_div1
                            }`}
                          onClick={() => handleTenthColor("Traditional")}
                        >
                          <p className=" py-2">
                            <Image
                              src={traditional}
                              height={60}
                              width={60}
                              alt="traditional"
                            />
                          </p>
                          <p className={styles.image_para_content}>Traditional</p>
                        </div>
                      </div>
                      <div className="col-xl-3 col-sm-3" id={styles.column}>
                        <div
                          className={`${!elevenColor
                            ? styles.camping_div_color1
                            : styles.camping_div1
                            }`}
                          onClick={() => handleElevenColor("Waterfall")}
                        >
                          <p className=" py-2">
                            <Image
                              src={waterfall}
                              height={60}
                              width={60}
                              alt="waterfall"
                            />
                          </p>
                          <p className={styles.image_para_content}>Waterfall</p>
                        </div>
                      </div>
                      <div className={styles.tripone_inputtwo_btn_container3}>
                        <button
                          disabled={text?.length <= 2}
                          className={styles.tripTwo_inputtwo_btn}
                          onClick={handleSubmit}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <input
                  className={styles.input_field}
                  onClick={toggleInput2}
                  onChange={demo}
                  value={amount.length === 0 ? "Budget Per Person" : amount}
                />
                <div style={{
                  display: input2 ? "block" : "none",
                }} id={styles.budget_popup} readOnly >


                  <div className="row justify-content-center">

                    <p className={styles.tripTwo_cross_para} onClick={toggleInput2}>
                      <button type="button" class="btn-close" aria-label="Close"></button>
                    </p>
                    <div className="row justift-content-center">
                      <div className="text-center">
                        <input placeholder="Enter Amount" onChange={handleAmount}
                          className={styles.tripTwo_inputTwo_input_container_input} />
                      </div>
                    </div>
                    <div className="row justify-content-center position-relative gx-0">
                      <div className={styles.budget_select_section}>
                        <input className={`${amount === "5,000" ? styles.TripTwo_btn_container_btn2 : styles.TripTwo_btn_container_btn}`}
                          onClick={(e) => handleBudgetAmount(e)} value="5,000" onChange={demo} readOnly id={styles.TripTwo_input_container_btn} />
                        <input className={`${amount === "10,000" ? styles.TripTwo_btn_container_btn2 : styles.TripTwo_btn_container_btn}`}
                          onClick={(e) => handleBudgetAmount(e)} value="10,000" onChange={demo} readOnly id={styles.TripTwo_input_container_btn} />
                        <input className={`${amount === "15,000" ? styles.TripTwo_btn_container_btn2 : styles.TripTwo_btn_container_btn}`}
                          onClick={(e) => handleBudgetAmount(e)} value="15,000" onChange={demo} readOnly id={styles.TripTwo_input_container_btn} />
                        <input className={`${amount === "20,000" ? styles.TripTwo_btn_container_btn2 : styles.TripTwo_btn_container_btn}`}
                          onClick={(e) => handleBudgetAmount(e)} value="20,000" onChange={demo} readOnly id={styles.TripTwo_input_container_btn} />
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="text-center">
                        <button
                          className={styles.tripTwo_inputtwo_btn}
                          onClick={saveBtn}>Save </button>
                      </div>
                    </div>
                    {/* <div className="text-center mb-5 mt-2">
                      <input
                        placeholder="Enter Amount"
                        onChange={handleAmount}
                        className={styles.tripTwo_inputTwo_input_container_input}
                        id={styles.enter_amount_input}
                      />
                    </div>
                    <div id={styles.budget_btn_div}>
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
                    </div>*/}
                    {/* <div className={styles.tripTwo_inputtwo_btn_container}>
                      <button
                        className={styles.tripTwo_inputtwo_btn}
                        onClick={saveBtn}>Save </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-3 text-center">
            <Link href="/tripThree">
              <button className={styles.save_btn} disabled={inputVal.length == 0 || amount == ""} onClick={handleSubmit_TripTwoData}>
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
