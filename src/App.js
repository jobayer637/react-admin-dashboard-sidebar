import "./App.css";
import SideMenu from "./components/layout/sideMenu/SideMenu";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";

import Dashboard from "./components/Dashboard";

function App() {
  const [inactive, setInactive] = useState(false);

  return (
    <div className="App">
      <Router>
        <SideMenu
          onCollapse={(inactive) => {
            setInactive(inactive);
          }}
        />

        <div className={`container ${inactive ? "inactive" : ""}`}>
          <Route path='/' exact component={Dashboard} />
        </div>

      </Router>
    </div>
  );
}

export default App;
