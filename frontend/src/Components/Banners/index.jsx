import React from "react";
import { Colors } from "../../Constants/ColorConstants";

export const Banners = () => {
  return (
    <div style={bannerContainer}>
      <h1>Sexy Poolz</h1>
    </div>
  );
};

const bannerContainer = {
  border: "1px",
  borderRadius: "0.5px",
  height: "10%",
  textAlign: "center",
  backgroundColor: Colors.lightOrange3,
};
