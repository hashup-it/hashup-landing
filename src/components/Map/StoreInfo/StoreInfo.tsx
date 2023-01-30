import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Flex, Grid, Image, keyframes, Link, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion';
import React, {useState, useEffect, FC} from 'react'
import { Colors } from '../../../colors'
// import GlobeIcon from '../../../Icons/globeIcon';
// import { Stat } from './Stat';
import { Transaction } from './Transaction';
import { useMoralisQuery } from 'react-moralis';

interface StoreInfoProps{
  storeName: string;
  description: string;
  logo: string;
  city: string;
  country: string;
  storeLink: string;
  display: boolean;
  marketplace: string;
}

export const StoreInfo: FC<StoreInfoProps> = ({ storeName, description, logo, city, country, storeLink, display, marketplace }) => {
  
  //is store info visible
  const [show, setShow] = useState<boolean>(false);
  const [transactions, setTransactions] = useState();

  const query = useMoralisQuery('Bought', query => query.equalTo('marketplace', marketplace), [marketplace], { autoFetch: false });
  
  useEffect(() => {
    if (!query.isLoading && !query.isFetching) console.log(query.data);
  }, [marketplace])
  
  //setting delay if display is becoming true
  //in order to avoid displaying content on the low width
  //(ux improvement)
  useEffect(() => {
    if (display)
      setTimeout(() => {
        setShow(true);
      }, 300)
    else setShow(false);
  }, [display])

  const animationKeyframes = keyframes`
  0% { 
    transform: translate(0, 0)
  }

  12.5% { 
    transform: translate(-4vw, -10vh)
  }

  25% { 
    transform: translate(-4vw, -20vh)
  }

  37.5% { 
    transform: translate(-4vw, -20vh)
  }

  50% { 
    transform: translate(0, -20vh)
  }

  62.5% { 
    transform: translate(-4vw, -10vh)
  }

  75% { 
    transform: translate(-8vw, 0)
  }

  87.5% {
    transform: translate(-4vw, 0)
  }

  100% { 
    transform: translate(0, 0)
  }
  `;

  const animation = `${animationKeyframes} 5s linear infinite`;

  return (
    <Flex h="80vh" w={display ? "30vw" : "0vw"} bg="rgba(200, 200, 200, 0.1)"
      p={display ? "25px 50px" : "0"} backdropFilter="blur(310px)"
      borderRadius="0 0px 0px 0" position="absolute" top="0" left="0" zIndex="1000"
      flexDirection="column" gap="25px" textAlign="start"
      transition="0.3s" overflow="hidden" display={{ base: 'none', xl: 'flex' }}>
      
       <Box filter="blur(100px)" position="absolute" bottom="-30vh" right="-50px"
              h="300px" w="300px" zIndex="-1" borderRadius="50%" bg={Colors.brandMain}
              as={motion.div} animation={animation} opacity="0.4"/>
      {show &&
        <>
          <Flex flexDirection="column" gap="35px" position="relative" maxH="50vh">
          
            <Flex gap="20px" w="100%" mt="8vh" alignItems="center" >
            
                <Image src={logo} h="64px" w="64px" />
                  
                <Flex flexDirection="column" w="100%" overflowWrap="revert">
                  <Link href={storeLink} target="_blank" color={Colors.brandMain} _hover={{textDecoration: 'underline', gap: '30px'}}
                      p="0" display="flex" alignItems="center" gap="10px" transition="0.5s ease-in-out">
                    <Text fontSize="22px" fontWeight="700" color={Colors.brandMain}>{storeName}</Text>
                <ChevronRightIcon color={Colors.brandMain} boxSize="35px" />
                  </Link>
              
              <Text fontSize="15px">{city}, {country}</Text>
            </Flex>
            
            </Flex>
          
          <Flex fontSize="14px" maxH="20vh" overflowY="auto" justifyContent="space-between" overflowWrap="break-word" flexDirection="column">
            <Text>{description}&nbsp;</Text>
            <Link color={Colors.brandMain} href={storeLink} target="_blank">CHECK OUT THE STORE</Link>
          </Flex>
          
          </Flex>
        
        
          <Flex flexDirection="column" gap="0" overflowY="auto">
            <Grid templateColumns="2fr 7fr" bg="#050505" fontSize="12px" justifyItems="center" fontWeight="700" p="10px 15px" borderRadius="10px">
              <Text>Age</Text>
              <Text>Details</Text>
            </Grid>
            <Flex flexDirection="column" gap="10px">
              <Transaction />
              <Transaction />
              <Transaction />
              <Transaction />
              <Transaction />
              <Transaction />
            </Flex>
          </Flex>
        
        </>
      }

      </Flex>
  )
}
