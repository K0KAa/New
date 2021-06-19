import React from "react"
import Topbar from "./components/Topbar/Topbar";
import Home from "./Pages/Home/Home";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";
import Settings from "./Pages/settings/Settings";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import {BrowserRouter as Router ,Switch,Route} from "react-router-dom";

function App() {
  const user = true
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
         {user?<Home />:<Register />}
        </Route>
        <Route  path="/register">
          {user? <Home /> : <Register />}
        </Route>
        <Route  path="/login">
        {user?<Home />:<Login />}
        </Route>
        <Route  path="/write">
        {user?<Write />:<Register />}
        </Route>
        <Route  path="/settings">
          {user?<Settings />:<Register />}
        </Route>
        <Route exact path="/post/:postId">
          <Single />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
