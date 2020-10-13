import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./Chat";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    //BEM naming convention
    <div className="app">
      <Router>
        {!user ? (
          <>
            <Login />
          </>
        ) : (
          <>
            {/* header  */}
            <Header />
            <div className="app__body">
              {/* sidebar */}
              <Sidebar />

              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>

                <Route path="/">
                  {/* <Chat /> */}
                  <div className="app__welcome">
                    <div className="app__h1">
                      <h1>WELCOME</h1>
                      <hr />
                      <h3>'Code can't lie</h3>
                      <h3> Comments can!'</h3>
                      <h2>#stay_safe</h2>
                    </div>
                  </div>
                </Route>
              </Switch>
              {/* react router --> chat screen */}
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
