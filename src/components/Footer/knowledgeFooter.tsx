import React from 'react';
import { Flex, Link, Text } from '@chakra-ui/react';

export const KnowledgeFooter = () => {
	return (
		<Flex
			direction="column"
			fontSize="12px"
		>
			<Text
				color="#6D6D6D"
				fontWeight="600"
			>
				KNOWLEDGE
			</Text>
			<Flex
				mt="10px"
				mb="23px"
				gridGap="9px"
				direction="column"
				fontWeight="400"
				fontSize="13px"
				color="white"
			>
				<Link
					href="https://cdn.hashup.it/hashup-whitepaper-eng.pdf"
					_hover={{ opacity: '0.6' }}
				>
					<Text>Whitepaper</Text>
				</Link>
				<Link
					href="https://hashup.gitbook.io/hashup-whitepaper/"
					_hover={{ opacity: '0.6' }}
				>
					<Text>Gitbook</Text>
				</Link>
			</Flex>
		</Flex>
	);
};

export default KnowledgeFooter;
