import React from "react";
import Board from "./Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

function App() {
  return (
    <div className="App">
      <Board nrows={10} ncols={6} chanceLightStartsOn={0.25} title="Welcome to Lights Out" />
    </div>
  );
}

export default App;
