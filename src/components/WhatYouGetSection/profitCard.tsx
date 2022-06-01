import { Box, Flex, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { Colors } from "../../colors";
import ArrowRightIcon from "../../Icons/arrowRightIcon";
import ChevronRightIcon from "../../Icons/chevronRightIcon";
import VideoBackground from "./videoBackground";

interface IProfitCard {
  number: string;
  label: string;
  description: string;
}

export const ProfitCard: FC<IProfitCard> = ({
  number,
  label,
  description,
  ...props
}) => {
  return (
    <Flex flexDirection="column" gridGap="30px" maxW="40vw" {...props}>
      <Flex gridGap="30px" alignItems="center">
        <Text fontSize="50px" fontWeight="200">
          {number}
        </Text>
        <Box h="2px" w="80px" bgColor={Colors.brandMain} />
      </Flex>
      <Text fontSize="50px" fontWeight="700">
        {label}
      </Text>
      <Text fontSize="15px" fontWeight="300" color={Colors.greyText}>
        {description}
      </Text>
      <Flex gridGap="25px" alignItems="center" position="relative" p="10px 0">
        <Text fontSize="12px" fontWeight="700">
          Learn more about Tocenomic
        </Text>
        <ChevronRightIcon color={Colors.brandMain} />
        <Box
          h="2px"
          w="40px"
          position="absolute"
          bottom="0"
          left="5px"
          bgColor={Colors.brandMain}
        />
      </Flex>
    </Flex>
  );
};

export default ProfitCard;
