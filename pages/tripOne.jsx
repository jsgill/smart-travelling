import React, { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import icon1 from "../public/images/trip/Group 22133.png";
import icon2 from "../public/images/trip/Group 22134.png";
import icon3 from "../public/images/trip/Group 22135.png";
import MydModalWithGrid from "../components/modal";
import styles from "../styles/TripOne.module.css";
import { Calendar } from "react-multi-date-picker"
import Popup from 'reactjs-popup';
function TripOne() {
  const [modalShow, setModalShow] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const [input1, setInput1] = useState(false);
  const [info, setInfo] = useState("");
  const [input2, setInput2] = useState(false);
  const [input3, setInput3] = useState(false);
  const [inputTwo, setInputTwo] = useState("");
  const [inputThree, setInputThree] = useState("");
  const [count, setCount] = useState(0);
  const [date, setDate] = useState([]);
  const startDate = new Date(date[0]).toDateString();
  const endDate = new Date(date[1]).toDateString();
  const [local, setLocal] = useState("");


  const handleChange = (key) => {
    if (userInfo.indexOf(key) == -1) {
      setUserInfo([...userInfo, key]);
    } else {
      var val = userInfo.indexOf(key);
      if (val !== -1) {
        var val11 = userInfo.splice(val, 1);
        var filter = userInfo.filter((item) => item !== val11);
        setUserInfo(filter);
      }
    }
  };

  const handleClick = () => {
    toggleInput1();
    info = ""
    for (let i = 0; i < userInfo.length; i++) {
      info = info.concat(userInfo[i]);
      if (i < userInfo.length - 1) {
        info = info.concat(", ");
      }
    }
    setInfo(info);
    setModalShow(false);
  };
  function toggleInput1() {
    setModalShow(true);
    setInput1(!input1);
  }
  function toggleInput2() {
    setInput2(!input2);
  }
  function toggleInput3() {
    setInput3(!input3);
  }

  function increment() {
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }
  function inputTwoBtn() {
    toggleInput2();
    setInputTwo(count);
  }
  function inputThreeBtn() {
    toggleInput3();
    setInputThree(date);
  }
  const handleSubmitInput1 = () => {
    for (let j = 0; j < userInfo.length; j++) {
      local = local.concat(userInfo[j]);
      if (j < userInfo.length - 1) {
        local = local.concat(", ");
      }
    }
    setLocal(local)
    const obj = {
      destination: local,
      guests: count,
      startdate: startDate,
      enddate: endDate,
    }
    localStorage.setItem("trip_one", JSON.stringify(obj));
  }

  return (
    <div>
      <div className={styles.main_top_background}>

        <div className="container">
          <div
            className="row justify-content-center"
            id={styles.icon_main_row}>
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
          <div className="row justify-content-center">
            <div className="col-md-7">
              <div onClick={toggleInput1} className={styles.input_field}>
                {info.length === 0 ? "Choose Destination" : info}
              </div>
              {/*hide show div for first input  */}
              <MydModalWithGrid show={modalShow} change={handleChange} onHide={() => handleClick()} selectCity={userInfo.length} />
              <div onClick={toggleInput2} className={styles.input_field}>
                {inputTwo.length == 0 ? "No. of Guests" : inputTwo}
              </div>
              {/*input second popup for no. of people */}
              <div style={{ display: input2 ? "block" : "none" }}>
                <div className="container">
                  <div className="row justify-content-center">
                    <div
                      className="col-md-3 text-center"
                      id={styles.tripOne_inputtwo_container}>
                      <div className="row justify-content-center">
                        <div className="col-md-12">
                          <div
                            className={styles.tripOne_inputtwo_content_container}>
                            <div>
                              <button onClick={decrement}
                                className="btn rounded-pill"
                                id={styles.increment}>
                                <i className="fa fa-minus"></i>
                              </button>
                            </div>
                            <p className={styles.tripOne_content_btn} value={inputTwo}>{count}
                            </p>
                            <div >
                              <button onClick={increment} id={styles.increment} className="btn rounded-pill">
                                <i className="fa fa-plus"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tripOne_inputone_btn_container} >
                          <button
                            className={styles.tripOne_inputone_btn}
                            onClick={inputTwoBtn}>Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <Popup position="top center" id={styles.calender_popup} trigger={<div disabled={!inputTwo} onClick={toggleInput3} className={styles.input_field} >
                {
                  inputThree.length == 0
                    ? "Select the Start & End Date"
                    : startDate.concat(" - ") + endDate
                }
              </div>} contentStyle={{
                borderRadius: "10px",
              }} modal nested>
                {close => (
                  <div >
                    <Calendar
                      range
                      value={date}
                      minDate={new Date()}
                      onChange={setDate}
                      format="DD MMMM  YYYY"
                      className={styles.calender}

                    />
                    <div className={styles.tripOne_inputone_btn_container1} onClick={() => {
                      close();
                    }}>
                      <button className={styles.tripOne_inputone_btn1} onClick={inputThreeBtn}>
                        Save
                      </button>
                    </div>
                  </div>
                )}
              </Popup>

            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-3 text-center">
              <Link href="/tripTwo">
                <button
                  className={styles.save_btn}
                  onClick={handleSubmitInput1}
                  disabled={!info || !inputTwo || !inputThree}>
                  Save & Continue
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
}
export default TripOne;