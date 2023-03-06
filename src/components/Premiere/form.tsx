import { Flex } from '@chakra-ui/react';
import Script from 'next/script';

const Form = () => (
	<Flex bgColor="black">
		<Script src="/scripts/mailer-newsletter.js" />
		<div
			id="newsletter"
			className="ml-form-embed"
			data-account="3556595:b7a5n7e8w5"
			data-form="4955744:x2o8o0"
		/>
	</Flex>
);

export default Form;
