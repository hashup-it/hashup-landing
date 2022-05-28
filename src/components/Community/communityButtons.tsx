import { Flex, Image, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { Colors } from "../../colors";
import RightArrowIcon from "../../Icons/chevronRightIcon";

export interface ICommunityButtons {
  name: string;
  description: string;
  icon: React.ReactNode;
  size?: any;
}

export const CommunityButtons: FC<ICommunityButtons> = ({
  name,
  size,
  description,
  icon,
}) => {
  return (
    <Flex
      w="20%"
      h="142px"
      borderWidth="1px"
      borderColor={Colors.brandMain}
      bgColor="transparent"
      color="white"
      direction="column"
      padding="20px"
      borderRadius="4px"
      _first={{
        borderTopLeftRadius: "44px",
      }}
      _last={{
        borderBottomRightRadius: "34px",
      }}
    >
      <Flex direction="column">
        <Flex justifyContent="space-between" alignItems="center" gridGap="56px">
          <Flex gridGap="12px" alignItems="center">
            {icon}
            <Text
              color="white"
              fontSize="32px"
              fontWeight="400"
              lineHeight="160%"
            >
              {name}
            </Text>
          </Flex>
          <RightArrowIcon />
        </Flex>
      </Flex>
      <Text
        color={Colors.subGrey}
        fontSize="12px"
        fontWeight="400"
        lineHeight="140%"
      >
        {description}
      </Text>
    </Flex>
  );
};

export default CommunityButtons;
