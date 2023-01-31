import { InfoIcon } from '@chakra-ui/icons'
import { Flex, Grid, Link, Text } from '@chakra-ui/react'
import moment from 'moment'
import React from 'react'
import { Colors } from '../../../colors'

export const Transaction = ({user, game, quantity, time, hash}: {user: string, game: string, quantity: string, time: any, hash: string}) => {
  return (
    <Grid templateColumns="2fr 4fr 2fr 1fr" fontSize="12px" bgColor="rgba(30, 30, 30, 0.7)" borderRadius="10px" p="15px" w="100%" justifyContent="space-between" justifyItems='center' alignItems="center">
        <Text>{moment(time).fromNow()}</Text>
          <Flex flexDirection="column">
        <Text>User: &nbsp;{user.slice(0, 8)}...</Text>
        <Text>Game: {game.slice(0, 8)}...</Text>
          </Flex>
          <Flex flexDirection="column" alignItems="center">
              <Text>Quantity</Text>
        <Text>{ quantity }</Text>
      </Flex>
      <Link href={`https://polygonscan.com/tx/${hash}"`} target="_blank">
        <InfoIcon _hover={{ color: Colors.brandMain, cursor: 'pointer' }} />
      </Link>
    </Grid>
  )
}
