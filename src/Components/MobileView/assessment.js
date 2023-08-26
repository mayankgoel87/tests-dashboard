import React from "react";
import link from "../../images/link.svg";
import bag from "../../images/bag.svg";
import dot from "../../images/dot.svg";
import calender from "../../images/calender.svg";
import plus from "../../images/add.svg";

const Assessment = (props) => {
  const { setShowForm } = props;

  // Toggle the display of the input form
  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  return (
    <div
      className="my-assessment"
      style={{
        flexDirection: "column",
        width: "300%", // Adjust this value based on your design
        overflowY: "auto",
      }}
    >
      {/* New Assessment section */}
      <div onClick={toggleForm} className="my-assess-items item1">
        <div className="img-con">
          <img src={plus} alt="+"></img>
        </div>
        <p className="item1-head">New Assessment</p>
        <p className="item1-text">
          From here you can add questions of multiple types like MCQs,
          subjective(text or paragraph)!
        </p>
      </div>

      {/* Repeating assessment items */}
      {Array.from({ length: 6 }, (_, index) => (
        <div
          className="my-assess-items item2"
          style={{
            height: "160px",
            marginBottom: "10px",
            marginTop: "10px",
          }}
          key={index}
        >
          <div
            className="end-items"
            style={{ borderBottom: "1px dotted #DADCE0" }}
          >
            <div style={{ display: "flex" }}>
              <img src={bag} alt="bag"></img>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p className="item1-head">Math Assessment</p>
                <div className="inside-item" style={{ border: "none" }}>
                  <p className="job">Job</p>
                  <img src={calender} alt="calendar"></img>
                  <p className="date">20 Apr 2023</p>
                </div>
              </div>
            </div>

            <img src={dot} alt="."></img>
          </div>

          <div className="main-second">
            <div className="bot-left">
              <div>
                <p className="bold">00</p>
                <p>Duration</p>
              </div>
              <div>
                <p className="bold">00</p>
                <p>Questions</p>
              </div>
            </div>
            <div className="bot-right">
              <div className="img-div">
                <img src={link} alt="link"></img>
                <p>Share</p>
              </div>
              <button>LP</button>
              <button className="bt2">LP</button>
              <button className="bt3">LP</button>
              <p
                style={{
                  color: "#1C4980",
                  fontWeight: "600",
                  fontSize: "16px",
                }}
              >
                +324
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Assessment;
