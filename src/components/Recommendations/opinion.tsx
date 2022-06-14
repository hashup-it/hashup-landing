import { Flex, Image, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { Colors } from "../../colors";
import PatchkitLogo from "../../Icons/patchkitLogo";

interface IOpinion {
  name: string;
  role: string;
  opinion: string;
  logo: React.ReactNode | string
}

export const Opinion: FC<IOpinion> = ({ name, role, opinion, logo }) => {
  return (
    <Flex flexDirection="column" gridGap="30px" alignItems="flex-start">
      <Text fontSize="20px" fontWeight="300">
        "{opinion}"
      </Text>
      <Flex fontSize="20px" fontWeight="700" flexDirection="column">
        {name},
        <Text fontSize="15px" fontWeight="400" color={Colors.greyText}>
          {role}
        </Text>
      </Flex>
      {logo}
    </Flex>
  );
};

export default Opinion;
