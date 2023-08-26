import React from "react";
import dashboard from "../../images/dashboard.svg";
import assessment from "../../images/note_alt.svg";
import quiz from "../../images/quiz.svg";
import result from "../../images/admin_meds.svg";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Dashboard */}
      <div className="sidebar_comp">
        <img src={dashboard} alt="Dashboard" />
        <span>Dashboard</span>
      </div>
      {/* Assessment */}
      <div className="sidebar_comp extra">
        <img src={assessment} alt="Assessment" />
        <span>Assessment</span>
      </div>
      {/* My Library */}
      <div className="sidebar_comp">
        <img src={quiz} alt="My Library" />
        <span>My Library</span>
      </div>

      {/* Underline */}
      <div className="underline"></div>

      {/* Admin */}
      <div className="admin">
        <span>Admin</span>
      </div>

      {/* Round Status */}
      <div className="sidebar_comp">
        <img style={{ alignItems: "center" }} src={result} alt="Round Status" />
        <span style={{ textAlign: "center", wordWrap: "unset" }}>
          Round Status
        </span>
      </div>
    </div>
  );
}

export default Sidebar;
