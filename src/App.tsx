import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppProvider } from "./context/App.context";
import Home from "./screens/Home/Home";

function App() {
    return (
        <div className="App">
            <AppProvider>
                <Router>
                    <Switch>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </AppProvider>
        </div>
    );
}

export default App;
