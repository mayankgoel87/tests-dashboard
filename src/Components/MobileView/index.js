import React from "react";

import sidebtn from "../../images/segment.svg";
import laptop from "../../images/laptop_mac.svg";
import search from "../../images/search.svg";
import filter from "../../images/filter_list_alt.svg";
import bar from "../../images/bar_chart.svg";

import Sidebar from "./sidebar";
import Overview from "./overview";
import Assessment from "./assessment";
import InputForm from "./inputform";

const MobileView = (props) => {
  const {
    sidebar,
    setSidebar,
    isMobileView,
    setIsMobileView,
    setShowForm,
    showForm,
    divc,
    setDivc,
    togMar,
    setTogmar,
  } = props;

  // Toggle mobile view and adjust body styles
  const handlemobileToggle = () => {
    document.body.style.width = "100%";
    document.body.style.margin = "0";
    document.body.style.backgroundColor = "rgb(247, 248, 250)";

    setIsMobileView(!isMobileView);
  };

  // Handle the toggle of the content div
  const handleDivConetent = () => {
    setDivc(!divc);
    if (!togMar) document.querySelector(".mobnav12").style.marginTop = "60%";
    setTogmar(!togMar);
    if (togMar) document.querySelector(".mobnav12").style.marginTop = "0%";
  };

  return (
    <div>
      {/* Render mobile view when isMobileView is true */}
      {isMobileView && (
        <div className={`mobi ${sidebar ? "active" : ""}`}>
          {/* Render Sidebar component */}
          {sidebar && <Sidebar sidebar={sidebar} setSidebar={setSidebar} />}

          <div className={`bigSide ${sidebar ? "active" : ""}`}>
            <div>
              {/* Mobile navigation */}
              <div className="mobnav">
                <div className="mobnav1">
                  <img
                    onClick={() => setSidebar(!sidebar)}
                    src={sidebtn}
                    alt="btn"
                  />
                  <span>Assessment</span>
                </div>
                <div onClick={handlemobileToggle} className="mobnav2">
                  <img src={laptop} alt="laptop" />
                </div>
              </div>

              {/* Assessment section */}
              <div className="mobassess">
                <span className="as1">My Assessments</span>
                <span className="as2">Unstop Assessments</span>
              </div>

              {/* Render Overview component when divc is true */}
              {divc && <Overview divc={divc} />}

              {/* Mobile navigation for filtering and toggling content */}
              <div className={`mobnav12 ${divc ? "active" : ""}`}>
                <span>My Assessments</span>
                <div className="mobnav123">
                  <img src={search} alt="search" />
                  <img src={filter} alt="filter" />
                  {!divc && (
                    <img onClick={handleDivConetent} src={bar} alt="bar" />
                  )}
                  {divc && (
                    <img
                      style={{
                        backgroundColor: "#F2F8FE",
                        borderRadius: "50%",
                        border: "1px solid #0073E6",
                      }}
                      onClick={handleDivConetent}
                      src={bar}
                      alt=""
                    />
                  )}
                </div>
              </div>

              {/* Render Assessment component */}
              <Assessment setShowForm={setShowForm} />
            </div>

            {/* Render InputForm component */}
            <InputForm setShowForm={setShowForm} showForm={showForm} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileView;
