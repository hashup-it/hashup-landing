import { Flex } from '@chakra-ui/react'
import React, { FC } from 'react'

export interface IVideoBackground {
    readonly src: string,
    readonly opacity: number,
}

export const VideoBackground:FC<IVideoBackground> = ({src, opacity}) => {
  return (
    <Flex>
        <video src='' width=''/>
    </Flex>
  )
}

export default VideoBackground