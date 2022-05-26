import { Icon } from "@chakra-ui/react";
import React from "react";

export const CopyIcon = ({ ...props }) => {
  return (
    <Icon
      width="17px"
      height="17px"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.2601 6.55811H7.96006C7.18686 6.55811 6.56006 7.18491 6.56006 7.95811V14.2581C6.56006 15.0313 7.18686 15.6581 7.96006 15.6581H14.2601C15.0333 15.6581 15.6601 15.0313 15.6601 14.2581V7.95811C15.6601 7.18491 15.0333 6.55811 14.2601 6.55811Z"
        stroke="#FF3F3F"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.76016 10.758H3.06016C2.68886 10.758 2.33276 10.6105 2.07021 10.3479C1.80766 10.0854 1.66016 9.72928 1.66016 9.35798V3.05796C1.66016 2.68666 1.80766 2.33056 2.07021 2.06801C2.33276 1.80546 2.68886 1.65796 3.06016 1.65796H9.36017C9.73148 1.65796 10.0876 1.80546 10.3501 2.06801C10.6127 2.33056 10.7602 2.68666 10.7602 3.05796V3.75796"
        stroke="#FF3F3F"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Icon>
  );
};

export default CopyIcon;
