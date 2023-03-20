import "./App.css";
import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 15;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar color="#f11946" progress={progress} />
        <Switch>
          <Route exact path="/">
            <News
              key="general"
              pageSize={pageSize}
              country="us"
              category="general"
            />
          </Route>
          <Route exact path="/business">
            <News
              key="business"
              pageSize={pageSize}
              country="us"
              category="business"
            />
          </Route>
          <Route exact path="/entertaiment">
            <News
              key="entertaiment"
              pageSize={pageSize}
              country="us"
              category="entertaiment"
            />
          </Route>
          <Route exact path="/general">
            <News
              key="general"
              pageSize={pageSize}
              country="us"
              category="general"
            />
          </Route>
          <Route exact path="/health">
            <News
              key="health"
              pageSize={pageSize}
              country="us"
              category="health"
            />
          </Route>
          <Route exact path="/science">
            <News
              key="science"
              pageSize={pageSize}
              country="us"
              category="science"
            />
          </Route>
          <Route exact path="/sports">
            <News
              key="sports"
              pageSize={pageSize}
              country="us"
              category="sports"
            />
          </Route>
          <Route exact path="/technology">
            <News
              key="technology"
              pageSize={pageSize}
              country="us"
              category="technology"
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
