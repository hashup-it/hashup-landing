import { Flex, Image } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const StoresLogo = () => {
    const [logos, setLogos] = useState<string[]>([]);

    useEffect(() => {
        setLogos([]);
        axios.get("https://open-api.hashup.it/v1/stores/").then((res: any) => {
            window.innerWidth > 1280 ? res.data.map((feature: any) => {
                setLogos((prev: string[]) => [...prev, feature.properties.logo])
            })
            : res.data.slice(0, 9).map((feature: any) => {
                setLogos((prev: string[]) => [...prev, feature.properties.logo])
            })
        })
    }, [])

  return (
    <Flex w="90vw" gap="15px" flexWrap="wrap" mt="50px" justifyContent="center">
        {logos.map((logo, index) => <Image key={index} src={logo} w="100px"/>)}
    </Flex>
  )
}
