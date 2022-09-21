import React, { useState } from "react";
import Image from "next/image";
import tripOne_logo_1 from "../public/images/trip/tripOne_logo_1.png";
import tripOne_logo_2 from "../public/images/trip/tripOne_logo_2.png";
import tripOne_logo_3 from "../public/images/trip/tripOne_logo_3.png";
import destination_1 from "../public/images/trip/destination_1.png";
import destination_2 from "../public/images/trip/destination_2.png";
import destination_3 from "../public/images/trip/destination_3.png";
import destination_4 from "../public/images/trip/destination_4.png";
import destination_5 from "../public/images/trip/destination_5.png";
import cross from "../public/images/trip/cross.png";
import styles from "../styles/TripOne.module.css";

function TripOne() {
  const [input1, setInput1] = useState(false);

  function toggleInput1() {
    setInput1(!input1);
  }
  const [circle, setcircle] = useState({
    MOHALI: false,
    KASOL: false,
    LEHLADAKH: false,
  });
  console.log("circle=========>", circle);
  function handleChange(e) {
    var { name, checked } = e.target;
    setcircle((e) => {
      var selectDestination = e.renu;

      return (selectDestination[name] = checked);
    });
  }
  // var displayDestination = circle.renu;

  // function handleChange(e) {
  //   console.log("temp =====>", e.target.name);
  //   var arr = ;
  //   arr.push(e.target.name);
  //   console.log("id =====>", arr);
  //   var newvar = 0;
  //   var count;
  //   for (count = 0; count < arr.length; count++) {
  //     console.log(" count ===>", count);
  //     newvar++;
  //     if (arr[count] == 0) {
  //       newvar = newvar + 1;
  //       console.log("temp==============>", temp[count].checked);
  //     }
  //     console.log("new ====>", newvar);
  //   }
  //   if (newvar >= 2) {
  //     alert("min length is 2");
  //   }
  // }

  return (
    <div>
      <div>
        <Image
          src="/../public/images/trip/trip_background.png"
          height={676}
          width={1366}
        />
        <div className={styles.tripOne_logo_container}>
          <div className={styles.tripOne_line}>
            <div className={styles.tripOne_logo}>
              <Image
                src={tripOne_logo_1}
                alt="trip_section_logo"
                height={22}
                width={20}
                className={styles.logo}
              />
            </div>
          </div>
          <div className={styles.tripOne_line}>
            <div className={styles.tripOne_logo_1}>
              <Image
                src={tripOne_logo_2}
                alt="trip_section_logo"
                height={22}
                width={20}
                className={styles.logo}
              />
            </div>
          </div>

          <div className={styles.tripOne_logo_1}>
            <Image
              src={tripOne_logo_3}
              alt="trip_section_logo"
              height={22}
              width={20}
              className={styles.logo}
            />
          </div>
        </div>
        <div className={styles.input_container}>
          <input
            defaultValue="Choose Destination"
            className={styles.input_field}
            onClick={toggleInput1}
          />

          {/*hide show div for first input  */}
          <div
            style={{
              display: input1 ? "block" : "none",
            }}
          >
            <div className="container" id={styles.tripOne_inputone_container}>
              <p className={styles.tripOne_content}>Choose 2 or more</p>
              <p className={styles.tripOne_cross_para} onClick={toggleInput1}>
                <Image
                  src={cross}
                  alt="cross_image"
                  height={12}
                  width={15}
                  className={styles.cross_image}
                />
              </p>
              <div className="row">
                <div
                  className="col-md-4 p-0"
                  id={styles.tripOne_inputone_content_container1}
                >
                  <Image src={destination_1} alt="destination-image" />
                  <input
                    type="checkbox"
                    name="MANALI"
                    onChange={handleChange}
                    className={styles.tripOne_circle1}
                  />
                </div>
                <p className={styles.tripOne_inputone_content_1}>MANALI</p>
                <div
                  className="col-md-4 p-0"
                  id={styles.tripOne_inputone_content_container2}
                >
                  <Image src={destination_2} alt="destination-image" />
                  <input
                    type="checkbox"
                    name="KASOL"
                    onChange={handleChange}
                    className={styles.tripOne_circle2}
                  />
                </div>
                <p className={styles.tripOne_inputone_content_2}>KASOL</p>
                <div
                  className="col-md-4 p-0"
                  id={styles.tripOne_inputone_content_container3}
                >
                  <Image src={destination_3} alt="destination-image" />
                  <input
                    type="checkbox"
                    name="LEHLADAKH"
                    onChange={handleChange}
                    className={styles.tripOne_circle3}
                  />
                </div>
                <p className={styles.tripOne_inputone_content_3}>Leh-Ladakh</p>
                <div
                  className="col-md-12"
                  id={styles.tripOne_inputone_image_container}
                >
                  <p className={styles.tripOne_inputone_content_6}>
                    Coming Soon
                  </p>
                  <div className="row px-3">
                    <div className="col-md-6 p-0">
                      <Image
                        src={destination_4}
                        alt="destination-image"
                        height={117}
                      />
                    </div>
                    <p className={styles.tripOne_inputone_content_4}>Goa</p>
                    <div className="col-md-6 p-0">
                      <Image
                        src={destination_5}
                        alt="destination-image"
                        height={230}
                      />
                    </div>
                    <p className={styles.tripOne_inputone_content_5}>
                      Rajsthan
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.tripOne_inputone_btn_container}>
                <button className={styles.tripOne_inputone_btn}>Save</button>
              </div>
            </div>
          </div>
          <input defaultValue="No.of Guests" className={styles.input_field} />
          <input
            defaultValue="Select the Start & End Date"
            className={styles.input_field}
          />
          <div className={styles.btn_container}>
            <button className={styles.save_btn}>Save & Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripOne;
