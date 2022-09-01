import { Flex } from '@chakra-ui/react';
import Script from 'next/script';

const FormPremiere = () => (
	<Flex>
		<Script src="/scripts/mailer-premiere.js" />
		<div className="ml-form-embed" data-account="3556595:b7a5n7e8w5" data-form="5695427:m0j3o9"></div>
	</Flex>
);

export default FormPremiere;
