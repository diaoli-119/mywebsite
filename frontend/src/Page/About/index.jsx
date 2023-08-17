import React from "react";
import { CommonText } from "../../Components/CommonText/index";
import { Colors } from "../../Constants/ColorConstants";
import { NavBar } from "../../Components/Navigation/index";

export const About = () => {
  return (
    <div style={aboutContainer}>
      <NavBar />
      <h1>About</h1>
      <CommonText
        tBgColor={Colors.lightGreen3}
        tText="This is a new developed Sex website with multiple sex videos"
      />
    </div>
  );
};

const aboutContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

export default About;
