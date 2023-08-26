import React from "react";
import plus from "../../images/add.svg";
import link from "../../images/link.svg";
import bag from "../../images/bag.svg";
import dot from "../../images/dot.svg";
import calender from "../../images/calender.svg";

const Assessment = (props) => {
  const { setShowForm } = props;

  // Function to toggle the assessment form display
  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  return (
    <div className="my-assessment">
      {/* New Assessment item */}
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

      {/* Assessment item 1 */}
      <div className="my-assess-items item2">
        <div className="end-items">
          <img src={bag} alt="bag"></img>
          <img src={dot} alt="."></img>
        </div>
        <p className="item1-head">Math Assessment</p>
        <div className="inside-item">
          <p className="job">Job</p>
          <img src={calender} alt="calendar"></img>
          <p className="date">20 Apr 2023</p>
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
          </div>
        </div>
      </div>

      {/* Assessment item 2 */}
      <div className="my-assess-items item3">
        <div className="end-items">
          <img src={bag} alt="bag"></img>
          <img src={dot} alt="."></img>
        </div>
        <p className="item1-head">Math Assessment</p>
        <div className="inside-item">
          <p className="job">Job</p>
          <img src={calender} alt="calendar"></img>
          <p className="date">20 Apr 2023</p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
