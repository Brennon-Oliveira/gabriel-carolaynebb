import React from "react";
import { AppProvider } from "./context/App.context";

function App() {
    return (
        <div className="App">
            <AppProvider>
                <h1>Ola</h1>
            </AppProvider>
        </div>
    );
}

export default App;
