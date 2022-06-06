import { Flex, Text, Box } from '@chakra-ui/react';
import React from 'react';
import { Colors } from '../../../../colors';
import SectionInfoButton from '../../../SectionLabel/sectionInfoButton';

export const Licenses = () => {
	return (
		<Flex direction="column" justifyContent="flex-start">
			<Flex direction="column" p="300px 0px 0px 210px">
				<Flex maxW="20%">
					<SectionInfoButton label="LICENSES" />
				</Flex>
                <Flex pt='50px' maxW='70%' fontSize='70px' fontWeight='600' lineHeight='110%' direction='column'>
                    <Text>Cartrigde what</Text>
                    <Text>is it to the gamer<strong>?</strong></Text>
                </Flex>
                <Box pt='50px' fontSize='26px' maxW='50%' fontWeight='500'>
                    <Text as='span'> The gaming licenses you purchased on the HashUp platform are in the form of <strong>ERC-20 tokens</strong>.</Text>
                    <Text as='span' color={Colors.additional}> In short, they work just like other cryptocurrencies. </Text>
                    <Text pt='50px' color={Colors.additional}> Owning a unit entitles the owner to launch the game. </Text>
                </Box>

			</Flex>
		</Flex>
	);
};

export default Licenses;
