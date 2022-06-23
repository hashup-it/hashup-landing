
import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React from 'react';
import { Colors } from '../../../colors';
import Form from '../../Premiere/form';

export const Newsletter = () => {
	return (
		<>
			<Form/>
		</>
		// <Flex
		// flexDirection="column"
		// gridGap="20px"
		// mb="50px">
		//     <Text fontSize='12px' fontWeight='600' color='#6d6d6d'>SUBSKRYBUJ NEWSLETTER</Text>
		//     <Text fontSize='12px' fontWeight='400' color='white'>Bądź z nami na bieżąco</Text>
		// <Flex justifyContent='space-between' gridGap='15px'>
		//   <Input fontSize='14px' color={Colors.greyText} placeholder='Twój adres email' bgColor='white' w='280px' _focus={{boxShadow: 'none'}}/>
		//   <Button fontSize='12px' bgColor={Colors.brandMain} _hover={{bgColor: '#FB3434'}}>ZAPISZ SIĘ</Button>
		// </Flex>
		// </Flex>
	);
};

export default Newsletter;