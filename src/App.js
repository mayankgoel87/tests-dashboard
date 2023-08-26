import "./App.css";
import DesktopView from "./Components/DesktopView/index";
import MobileView from "./Components/MobileView/index";
import { useState } from "react";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [divc, setDivc] = useState(false);
  const [togMar, setTogmar] = useState(false);

  return (
    <div className="App">
      <DesktopView
        showForm={showForm}
        setShowForm={setShowForm}
        isMobileView={isMobileView}
        setIsMobileView={setIsMobileView}
        sidebar={sidebar}
        setSidebar={setSidebar}
        divc={divc}
        setDivc={setDivc}
        togMar={togMar}
        setTogmar={setTogmar}
      />
      <MobileView
        showForm={showForm}
        setShowForm={setShowForm}
        isMobileView={isMobileView}
        setIsMobileView={setIsMobileView}
        sidebar={sidebar}
        setSidebar={setSidebar}
        divc={divc}
        setDivc={setDivc}
        togMar={togMar}
        setTogmar={setTogmar}
      />
    </div>
  );
}

export default App;
