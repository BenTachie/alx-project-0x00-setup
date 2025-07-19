import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, style }) => {
  return (
    <button className={`text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 ${style}`}>
      {title}
    </button>
  );
};

export default Button;
