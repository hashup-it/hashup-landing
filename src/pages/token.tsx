import { Flex, Image, Text, Box } from "@chakra-ui/react";
import { Colors } from "../colors";

import React from "react";
import PathComponent from "../components/ChoosePath/pathComponent";
import EarnTokenIcon from "../Icons/earnTokenIcon";
import PlayTokenIcon from "../Icons/playTokenIcon";
import BuildTokenIcon from "../Icons/buildTokenIcon";

export const Token = () => {
  return (
    <Flex direction='column' alignItems="center" h="100%">
    <Flex pt='28%'>
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      w="100%"
      pb="10px"
      mb="100px"
    >
        <Image
          position="absolute"
          h="100vh"
          w="100vw"
          left="0"
          top="0"
          zIndex="0"
          src="/assets/hash-tokenomics.png"
          bgGradient="linear(180deg, rgba(0, 0, 0, 0) 77.54%, #000000 92.75%)"
          opacity="0.7"
        />
      <Flex
        w="70%"
        zIndex="1"
        justifyContent='flex-start'
        direction="column"
        alignItems="center"
        gridGap="10px"
      >
        <Text fontSize="16px" color={Colors.greyText} fontWeight="400">
          THE HASH / # TOKEN ECONOMICS
        </Text>
        <Text fontSize="48px" color="white" fontWeight="700">
          THE HASH / # Token Economics
        </Text>
        <Box bgColor="white" w="100%" h="1px" />
        <Text >
          Przegląd ogólny sieci HashUp, opis tokenu, jego mechaniki, jak
          zarabiać # oraz zachęty do #ODL.
        </Text>
        <Box bgColor="white" w="100%" h="1px" />
        <Text>
          Celem platformy HashUp jest agregowanie tokenów licencyjnych do
          oprogramowania (głównie gier) zgodnych ze standardami ERC20 lub ERC721
          i ich sprzedaż.{" "}
        </Text>
      </Flex>
    </Flex> 
    </Flex>
    <Flex  
        w="70%"
        zIndex="1"
        justifyContent='flex-start'
        direction="column"
        mb='200px'
        gridGap="10px"
        lineHeight='30px'>
        <Text>
          Token jest narzedziem, ktore umozliwia:
        </Text>
        <Text>
          • Oddanie zysków na platformie w ręce społeczności, poprzez mechanizm 15% Buybuck&Burn
        </Text>
        <Text>
        • Kierowanie pozytywnymi na platformie działaniami, poprzez mechanizm pozytywnej inflacji (liquidity mining)
        </Text>
        <Text>
        • Zarządzanie kluczowymi decyzjami na platformie, funkcja governance
        </Text>
        <Text>
        • Kupowanie zasięgów na platformie
        </Text>
        <Flex justifyContent='space-between'>
            <PlayTokenIcon />
            <BuildTokenIcon />
            <EarnTokenIcon />
        </Flex>
        <Text fontWeight='700' fontSize='32px' pt='30px'>
          Podstawowe informacje
        </Text>
        <Flex gridGap='5px'>
          <Text fontWeight='700'>
          Nazwa:
          </Text>
          <Text> Hash / # </Text>
          </Flex>
          <Text fontWeight='700'>
          Platformy:
          </Text>
          <Text>
          • GameCap.io 
          </Text>
          <Text>
          • GameXplorer.io 
          </Text>
          <Text>
          • GameContract.io
          </Text>
          <Text>
          • GamePaper.io
          </Text>
          <Text>
          • Customowe sklepy z grami (możliwość)
          </Text>
          <Flex gridGap='5px'>
          <Text fontWeight='700'>
          Podaż startowa:
          </Text>
          <Text> 1 000 000 000</Text>
          </Flex>
          <Flex gridGap='5px'>
          <Text fontWeight='700'>
          Typ tokenu:
          </Text>
          <Text> ERC20 burnable</Text>
          </Flex>
          <Text fontWeight='700'>Tokenomia:</Text>
          <Text>
          • 30% fundraising  
          </Text>
          <Text>
          • 35% pozytywna inflacja
          </Text>
          <Text>
          • 35% #spółka
          </Text>
          <Flex gridGap='5px'>
          <Text fontWeight='700'>
          Mechanizm popytu:
          </Text>
          <Text> 15% buyback and burn przy każdym sprzedaniu gry, płynność do gier komputerowych</Text>
          </Flex>
          <Text pt='30px' fontSize='40px' fontWeight='700'> Mechanizmy popytu tokenu #:</Text>
          <Text fontSize='24px' fontWeight='600' pt='20px'>
          1. 15% Buyback&Burn - # jako bilet do zysków z platformy
          </Text>
          <Text>
          HashUp jako platforma służąca do sprzedaży gier komputerowych za USDT dzieli zyski na kilka podmiotów:
          </Text>
          <Text>
          • Twórcę - 85-90% - zyski dla Twórcy
          </Text>
          <Text>
          • Reflink - 5% - opcjonalne
          </Text>
          <Text>
          • # token - 15% - Buyback&Burn
          </Text>
          <Text>
          Warto podkreślić, że mechanizm działa w czasie rzeczywistym, czyli każdy z podmiotów otrzymuje USDT natychmiast przy każdej sprzedaży. 
          </Text>
          <Box 
          as="video"
          w='100%'
          src="assets/videos/demand-flow-chart.mp4"
          autoPlay
          playsInline
          preload="none"
          muted
          loop />
          <Text> Jak dokładnie działa pula płynności do której trafia 15% $ z mechanizmu Buyback&Burn?</Text>
          <Text> Myśląc o puli płynności warto myśleć jak o worku na parę tokenów. USDT i # są tokenami 
          więc mogą znajdować się w puli i być parą. Niech w puli w początkowym stanie znajduje się 10$ i 10#. 
          W takiej puli cena wynosi 1$ za 1#.</Text>
          <Text fontSize='14px' color='#9D9D9D' fontStyle='italic'> Bardzo upraszczając cena wynosi stosunek walut w puli. 
          Dzięki temu nie trzeba rozkładać ofert jak w przypadku OrderBook oraz nie musi istnieć osoba 
          po drugiej stronie rynku, by kupno lub sprzedaż w parze miało miejsce. 
          Po prostu ktoś musi wsadzić do puli (worka) parę tokenów. </Text>
          <Text> Jak dokładnie działa pula płynności do której trafia 15% $ z mechanizmu Buyback&Burn?</Text>
    </Flex>
    </Flex>
  );
};

export default Token;
