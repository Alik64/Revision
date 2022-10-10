import React from "react";

interface CardProps {
  width: string;
  height: string;

  children?: React.ReactNode;
}
const Card: React.FC<CardProps> = ({ width, height, children }) => {
  const style = {
    width,
    height,
    border: "1px solid blue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return <div style={style}>{children}</div>;
};

export default Card;
