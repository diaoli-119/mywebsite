import React from "react";
import { useNavigate } from "react-router-dom";
import { Colors } from "../../Constants/ColorConstants";
import { FontWeight } from "../../Constants/FontWeight";

export const NavBar = () => {
  const navigate = useNavigate();

  const naviToPage = (path) => {
    navigate(path);
  };

  return (
    <div style={navContainer}>
      <div style={leftContainer} onClick={() => naviToPage("/home")}>
        HOT SEX XXXX VIDEOS
      </div>
      <div style={rightContainer}>
        <div style={element} onClick={() => naviToPage("/home")}>
          Home
        </div>
        <div style={element} onClick={() => naviToPage("/about")}>
          About
        </div>
        <div style={element} onClick={() => naviToPage("/contact")}>
          Contact
        </div>
      </div>
    </div>
  );
};

const navContainer = {
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  color: "white",
  padding: "20px 0 20px 0",
  backgroundColor: Colors.black,
};

const leftContainer = {
  marginLeft: "6%",
  cursor: "pointer",
  fontWeight: FontWeight.Bold,
};

const rightContainer = {
  display: "flex",
  justifyContent: "space-evenly",
};

const element = {
  padding: "0 20px 0 20px",
  cursor: "pointer",
  fontWeight: FontWeight.Bold,
};