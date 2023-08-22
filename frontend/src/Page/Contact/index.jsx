import React from "react";
import { CommonText } from "../../Components/CommonText/index.jsx";
import { Colors } from "../../Constants/ColorConstants";
import { NavBar } from "../../Components/Navigation/index.jsx";

export const Contact = () => {
  return (
    <div style={contactContainer}>
      <NavBar />
      <h1>Contact</h1>
      <CommonText
        tHeight="2%"
        tText="Developer: Vincent Diao"
        tBgColor={Colors.lightGreen3}
      />
      <CommonText
        tHeight="2%"
        tText="Email: eksvideodc@gmail.com"
        tMargin="10px 0 0 0"
        tBgColor={Colors.lightGreen3}
      />
      <CommonText
        tHeight="2%"
        tText="Contact Number: 0211228239"
        tMargin="10px 0 0 0"
        tBgColor={Colors.lightGreen3}
      />
    </div>
  );
};

const contactContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};