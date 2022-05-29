import { Icon } from "@chakra-ui/react";
import React, { FC } from "react";

interface Props {
  color?: string;
  h?: string;
  transform?: string;
  opacity?: string;
  cursor?: string;
  onClick?: () => void;
}

export const ChevronRightIcon: FC<Props> = ({
  color,
  h,
  transform,
  opacity,
  onClick,
  cursor,
}) => {
  return (
    <Icon
      width="9px"
      height={h ? h : "14px"}
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform={transform}
      onClick={onClick}
      opacity={opacity ? opacity : "1"}
      cursor={cursor}
    >
      <path
        d="M1.04289 12.2929C0.652369 12.6834 0.652369 13.3166 1.04289 13.7071C1.43342 14.0976 2.06658 14.0976 2.45711 13.7071L1.04289 12.2929ZM7.75 7L8.45711 7.70711C8.64464 7.51957 8.75 7.26522 8.75 7C8.75 6.73478 8.64464 6.48043 8.45711 6.29289L7.75 7ZM2.45711 0.292893C2.06658 -0.0976311 1.43342 -0.0976311 1.04289 0.292893C0.65237 0.683417 0.65237 1.31658 1.04289 1.70711L2.45711 0.292893ZM2.45711 13.7071L8.45711 7.70711L7.04289 6.29289L1.04289 12.2929L2.45711 13.7071ZM8.45711 6.29289L2.45711 0.292893L1.04289 1.70711L7.04289 7.70711L8.45711 6.29289Z"
        fill={color ? color : "white"}
      />
    </Icon>
  );
};

export default ChevronRightIcon;
