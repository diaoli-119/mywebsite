import React from "react";
import { Colors } from "./Constants/ColorConstants";
import RoutePath from "./Routes";

function App() {
  const appBackground = {
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundColor: Colors.lightGreen3,
  };

  return (
    <div style={appBackground}>
      <RoutePath />
    </div>
  );
}

export default App;
