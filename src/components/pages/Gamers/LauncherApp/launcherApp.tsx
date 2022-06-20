import { Flex, Text, Box, Image } from '@chakra-ui/react'
import React from 'react'
import SectionInfoButton from '../../../SectionLabel/sectionInfoButton'
import { Colors } from '../../../../colors'
import AppleLogo from '../../../../Icons/appleLogo'
import MicrosoftLogo from '../../../../Icons/microsoftLogo'
import HTMlLogo from '../../../../Icons/htmlLogo'
import RedCircleLauncher from '../../../../Icons/redCircleLauncher'
import GrayCircleLauncher from '../../../../Icons/grayCircleLauncher'

export const LauncherApp = () => {
  return (
    <Flex justifyContent='space-between' position='relative' p={['80px 0px 0px 80px', '100px 0px 100px 210px', '100px 0px 100px 210px' , '100px 0px 100px 210px']}>
    <Flex direction="column" justifyContent="flex-start" maxW={['80%', '60%', '40%', "40%"]}>
    <Flex direction="column" >
        <Flex maxW="90%">
            <SectionInfoButton label="LAUNCHER APP" />
        </Flex>
        <Flex pt='50px' fontSize={['24px', '32px', '40px', '40px']} fontWeight='600' lineHeight='110%' direction='column'>
            <Text>Lorem iplsum </Text>
            <Text>dolores mesnepeh</Text>
            <Text>amit dit<strong>.</strong></Text>
        </Flex>
        <Flex pt='25px' pb='20px' display={['flex', 'flex', 'none', 'none']}>
            <Image src='./assets/mobileLauncherApp.png'/>
        </Flex>
        <Box pt='50px' fontSize={["16px", "18px", "22px", "24px"]} maxW={['100%', '100%', '100%', '85%']} fontWeight='500'>
            <Text as='span'> Blablabla digital game store with a blockchain explorer and social media for gamers.</Text>
            <Text as='span' color={Colors.additional}>{' '}It also creates an environment for browsing games and user profiles whnvironment for browsing games and user profiles while introducing an element of social media.</Text>
        </Box>
        <Flex pt='50px' alignItems='center' gridGap='23px'>
            <AppleLogo />
            <MicrosoftLogo />
            <HTMlLogo />
        </Flex>
        <Box marginTop='50px' w='80px' h='1px' bgColor={Colors.brandMain}/>
        <Flex direction='column' pt='20px'>
            <Text fontSize='15px'>Premiere</Text>
            <Text fontWeight='700' fontSize='18px' color={Colors.brandMain}>SOON</Text>
        </Flex>
    </Flex>
</Flex>

    <Flex display={['none', 'none', 'flex', 'flex']} position='absolute'  right='-250px'  zIndex='2'>
        <Image src='./assets/launcherApp1.png'/>
    </Flex>
    <Flex display={['none', 'none', 'flex', 'flex']} position='absolute' bottom='30%' right='-100px' zIndex={1}>
        <RedCircleLauncher/>
    </Flex> 
    <Flex display={['none', 'none', 'flex', 'flex']} position='absolute' bottom='2%' left='45%' zIndex={1}>
        <GrayCircleLauncher/>
    </Flex> 
    <Flex display={['none', 'none', 'flex', 'flex']} position='absolute' top='50%' left='70%' zIndex={100} mb='100px'>
        <Image src='./assets/gameWallet.png'/>
    </Flex>
</Flex>
  )
}

export default LauncherApp