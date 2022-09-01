import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import FormPremiere from './formPremiere';

export const Newsletter = () => {
	return (
		<Flex flexDirection="column" gridGap="30px" alignItems="center" zIndex="1">
			<Text textAlign="center" fontSize={['24px', '24px', '40px', '40px']} fontWeight="300">
				Be ready and subscribe our newsletter
			</Text>
			{/* <Flex gridGap="10px" h="8vh" w="100%" justifyContent="center"> */}
			{/* <Input
          placeholder="Enter e-mail address"
          bgColor="#222"
          border="none"
          color="white"
          h="100%"
          borderRadius="0"
        /> */}
			<FormPremiere />
			{/* <Flex
					bgColor={Colors.brandMain}
					p="15px 37px"
					h="100%"
					fontSize="18px"
					fontWeight="600"
					alignItems="center"
					justifyContent="center"
					cursor="pointer"
				>
					Subscribe
				</Flex> */}
			{/* </Flex> */}
		</Flex>
	);
};

export default Newsletter;
