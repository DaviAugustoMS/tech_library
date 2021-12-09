import React from "react";
import "./styles.scss";
import activeBtn from "../../assets/filter_button_active.svg";
import noActiveBtn from "../../assets/filter_button.svg";
import aZ from "../../assets/filter_alphabetic.svg";
import colors from "../../assets/filter_colors.svg";
import sizes from "../../assets/filter_sizes.svg";

interface IButton {
  type: "az" | "colors" | "sizes";
  action?: boolean;
  onPress: () => void;
}

const Button = ({ type, action, onPress }: IButton) => {
  return (
    <button
      style={{
        background: `url(${
          action ? activeBtn : noActiveBtn
        }) no-repeat center center`,
      }}
      className="button"
      onClick={onPress}
    >
      <div
        style={{
          background: `url(${
            type === "az" ? aZ : type === "colors" ? colors : sizes
          }) no-repeat center center`,
        }}
        className="button__img"
      ></div>
    </button>
  );
};

export { Button };
