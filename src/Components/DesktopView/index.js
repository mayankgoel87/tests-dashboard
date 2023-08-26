import React from "react";
import mobilepic from "../../images/mobile.svg";

import Sidebar from "./sidebar";
import Overview from "./overview";
import Assessment from "./assessment";
import InputForm from "./inputform";

const DesktopView = (props) => {
  const { isMobileView, setIsMobileView, showForm, setShowForm } = props;

  // Function to toggle between desktop and mobile views
  const handleToggleView = () => {
    document.body.style.width = "375px"; // Setting body width for mobile view
    document.body.style.margin = "auto"; // Centering content in mobile view
    document.body.style.backgroundColor = "black"; // Changing background color for mobile view

    setIsMobileView(!isMobileView); // Toggle mobile/desktop view
  };

  return (
    <>
      {!isMobileView && (
        <div className="big_div">
          <Sidebar />
          <div className="sidebar2">
            <div className="sidebar21">
              <div className="main-div">
                <div className="div-left">
                  <p className="Assessment-1">Assessment</p>
                  <div className="border-right"></div>
                  <div className="assess">
                    <p className="Assessment-2">My Assessments</p>
                  </div>
                </div>
                <div onClick={handleToggleView}>
                  <img src={mobilepic} alt="mobileView"></img>
                </div>
              </div>
              <p className="ass_over">Assessment Overview</p>

              <Overview />
              <p className="ass_over">My Assessment</p>

              {/* Pass the setShowForm prop to the Assessment component */}
              <Assessment setShowForm={setShowForm} />

              {/* Pass the showForm and setShowForm props to the InputForm component */}
              <InputForm showForm={showForm} setShowForm={setShowForm} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DesktopView;
