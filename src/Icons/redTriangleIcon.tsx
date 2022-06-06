import { Icon } from "@chakra-ui/react";
import React from "react";

export const RedTriangleIcon = ({ ...props }) => {
  return (
    <Icon
      width="7"
      height="10px"
      viewBox="0 0 7 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.28341 9.02098L6.2622 1.90826L5.05875 0.983657L-2.01967e-05 6.49833L3.28341 9.02098Z"
        fill="#FF3F3F"
      />
    </Icon>
  );
};

export default RedTriangleIcon;
