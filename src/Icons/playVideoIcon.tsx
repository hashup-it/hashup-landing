import { Icon } from "@chakra-ui/react";
import React from "react";


export interface IPlayVideoIcon {
  width: number, 
  height: number,
}

export const PlayVideoIcon = ({width, height}) => {
  return (
    <Icon
      width={width}
      height={height}
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="15.6462px" cy="15.3537px" r="10.6745px" fill="#FF3F3F" />
      <circle
        cx="15.5px"
        cy="15.5px"
        r="15.2075px"
        stroke="#FF3F3F"
        strokeWidth="0.584906"
      />
      <path
        d="M13.719 12.1782V18.6482L19.1107 15.4132L13.719 12.1782Z"
        stroke="white"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default PlayVideoIcon;
