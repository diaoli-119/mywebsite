import React from "react";
import { Colors } from "../../Constants/ColorConstants";

export const CommonText = ({
  tWidth,
  tHeight,
  tBgColor = Colors.white,
  tText = "",
  tMargin = "0 0 0 0",
  tPadding = "0 0 0 0",
}) => {
  return (
    <div
      style={{
        width: tWidth,
        height: tHeight,
        backgroundColor: tBgColor,
        margin: tMargin,
        padding: tPadding,
      }}
    >
      {tText}
    </div>
  );
};