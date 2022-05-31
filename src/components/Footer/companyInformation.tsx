import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const companyData = {
    name: 'HashUp P.S.A.',
	address: 'al. Jana Pawła 27',
	addressDetails: '00-867 Warszawa',
	email: 'hello@hashup.it',
	NIP: '5272974670',
	KRS: '0000927509',
}


export const CompanyInformation = () => {
  return (
    <Flex direction='column' fontSize='12px' w='100%'>
        <Text color="#6D6D6D" fontWeight="600">NASZA SIEDZIBA</Text>
        <Flex
        mt='10px'
        mb='23px' 
        direction='column'
		fontWeight="600"
		fontSize="14px"
		color="white">
            <Text>{companyData.name}</Text>
            <Text>{companyData.address}</Text>
            <Text>{companyData.addressDetails}</Text>
        </Flex>
        <Flex
        mb='23px' 
        fontSize='12px'
        fontWeight='400' 
        direction='column'>
            <Text>{companyData.email}</Text>
        </Flex>
        <Flex 
        direction='column'
        fontWeight='400'
        fontSize='14px'
        color='#6d6d6d'>
            <Text>NIP: {companyData.NIP}</Text>
            <Text>KRS: {companyData.KRS}</Text>
        </Flex>
    </Flex>
  )
}

export default CompanyInformation