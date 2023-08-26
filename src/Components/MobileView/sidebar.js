import React from "react";
import dashboard from "../../images/dashboard.svg";
import assessment from "../../images/note_alt.svg";
import quiz from "../../images/quiz.svg";
import cut from "../../images/cut.svg";
import result from "../../images/admin_meds.svg";

function Sidebar(props) {
  return (
    <div className={`sidemob ${props.sidebar ? "active" : ""}`}>
      {/* Sidebar header */}
      <div className="side1">
        <span>Menu</span>
        <img
          onClick={() => props.setSidebar(!props.sidebar)}
          src={cut}
          alt="X"
        />
      </div>
      {/* Sidebar items */}
      <div className="side2">
        <img src={dashboard} alt="dashboard" />
        <span>Dashboard</span>
      </div>
      <div className="side2 extra">
        <img src={assessment} alt="assess" />
        <span>Assessment</span>
      </div>
      <div className="side2">
        <img src={quiz} alt="quiz" />
        <span>My Library</span>
      </div>
      {/* Sidebar section separator */}
      <div className="underline1"></div>
      {/* Admin section */}
      <div className="side21">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img style={{ paddingRight: "8px" }} src={result} alt="result" />
          <span>Round Status</span>
        </div>
        <div className="admin">
          <span>Admin</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
