import { InfoIcon } from '@chakra-ui/icons'
import { Flex, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import { Colors } from '../../../colors'

export const Transaction = () => {
  return (
    <Grid templateColumns="2fr 4fr 2fr 1fr" fontSize="12px" bgColor="rgba(30, 30, 30, 0.7)" borderRadius="10px" p="15px" w="100%" justifyContent="space-between" justifyItems='center' alignItems="center">
        <Text>6 days ago</Text>
          <Flex flexDirection="column">
              <Text>User: &nbsp;&nbsp;&nbsp;0x78dasd...</Text>
              <Text>Game: 0xb7asdb...</Text>
          </Flex>
          <Flex flexDirection="column" alignItems="center">
              <Text>Quantity</Text>
              <Text>3</Text>
        </Flex>
        <InfoIcon _hover={{color: Colors.brandMain, cursor: 'pointer'}}/>
    </Grid>
  )
}
