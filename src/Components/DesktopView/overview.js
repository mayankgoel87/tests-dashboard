import React from "react";
import view_1 from "../../images/view_ag.svg";
import view_2 from "../../images/Frame 1000009353.svg";
import view_3 from "../../images/Frame 1000005832.svg";
import view_4 from "../../images/Frame 1000009100.svg";

function Overview() {
  return (
    <div className="assessment_overview">
      {/* Total Assessments */}
      <div className="over1">
        <p>Total Assessments</p>
        <div className="tiny1">
          <img src={view_1} alt="view1" />
          <p>34</p>
        </div>
      </div>

      {/* Candidates */}
      <div className="over2">
        <p className="over2p">Candidates</p>
        <div className="tiny2">
          <img src={view_2} alt="view2" />
          <div className="tiny21 border_tiny">
            <div className="tiny321">
              <p className="p1">11,145</p>
              <p className="p2">+89</p>
            </div>
            <p className="p3">Total Candidates</p>
          </div>
          <div className="tiny21">
            <div className="tiny321">
              <p className="p1">1,14</p>
              <p className="p2">+89</p>
            </div>
            <p className="p3">Who Attempted</p>
          </div>
        </div>
      </div>

      {/* Candidate Source */}
      <div className="over2 over3">
        <p className="over2p">Candidate Source</p>
        <div className="tiny2">
          <img src={view_3} alt="view3" />
          <div className="tiny21 border_tiny">
            <div className="tiny321">
              <p className="p1">11,100</p>
              <p className="p2">+89</p>
            </div>
            <p className="p3">Email</p>
          </div>
          <div className="tiny21 border_tiny">
            <div className="tiny321">
              <p className="p1">145</p>
              <p className="p2">+89</p>
            </div>
            <p className="p3">Social Share</p>
          </div>
          <div className="tiny21">
            <div className="tiny321">
              <p className="p1">145</p>
              <p className="p2">+89</p>
            </div>
            <p className="p3">Unique Link</p>
          </div>
        </div>
      </div>

      {/* Total Purpose */}
      <div className="over4">
        <p>Total Purpose</p>
        <div className="tiny4">
          <img src={view_4} alt="view4" />
          <p>11</p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
