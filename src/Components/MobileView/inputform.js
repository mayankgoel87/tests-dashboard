import React from "react";
import cut from "../../images/cut.svg";

const InputForm = (props) => {
  const { showForm, setShowForm } = props;

  // Toggle the display of the input form
  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  return (
    <div className={`form-container ${showForm ? "active" : ""}`}>
      {/* Display the input form when showForm is true */}
      {showForm && (
        <div className="form-overlay">
          <div
            className="form-wrapper"
            style={{ width: "370px", left: "37%", top: "8%" }}
          >
            <form className="form-content">
              <div className="form_top">
                <h2>Create new assessment</h2>
                <img onClick={toggleForm} src={cut} alt="X" />
              </div>
              <div className="form_div_input">
                {/* Input field for purpose of the test */}
                <div
                  className="form_div_input1"
                  style={{ marginBottom: "-10px" }}
                >
                  <p>Purpose of the test is</p>
                  <select style={{ width: "330px" }} disabled>
                    <option style={{ color: "#1C4980" }}>Select</option>
                  </select>
                </div>

                {/* Input field for description */}
                <div
                  className="form_div_input1"
                  style={{ marginBottom: "-10px" }}
                >
                  <p>Description</p>
                  <select style={{ width: "330px" }} disabled>
                    <option style={{ color: "#1C4980" }}>Select</option>
                  </select>
                </div>

                {/* Input field for skills */}
                <div className="form_div_input1">
                  <p>Skills</p>
                  <div className="skills" style={{ width: "309px" }}>
                    {/* Displayed skills with cut icons */}
                    <span style={{ width: "41%" }}>
                      UI/UX and Design <img src={cut} alt="X" />
                    </span>
                    {/* ... more skill spans ... */}
                  </div>
                  <input
                    style={{ width: "300px" }}
                    className="skills_input"
                    disabled
                    type="email"
                    placeholder="Type here"
                  />
                </div>

                {/* Input field for duration of assessment */}
                <div className="form_div_input1">
                  <p>Duration of assessment</p>
                  <input
                    style={{ width: "300px" }}
                    className="hrs"
                    disabled
                    type="email"
                    placeholder="HH:MM:SS"
                  />
                </div>
              </div>
            </form>
            <div className="but_div">
              <button
                style={{ width: "333px" }}
                className="sub_button"
                type="submit"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InputForm;
