import React from 'react'
import TelegramSocialIcon from '../../../Icons/telegramSocialIcon'
import LinkedinSocialIcon from '../../../Icons/linkedinSocialIcon'
import TwitterSocialIcon from '../../../Icons/twitterSocialIcon'
import FacebookSocialIcon from '../../../Icons/facebookSocialIcon'
import InstagramSocialIcon from '../../../Icons/instagramSocialIcon'
import { Flex } from '@chakra-ui/react'
import SocialIcon from './socialIcon'

export interface ISocialIconType {
    iconUrl: React.ReactNode,
    linkUrl: string,
}

const socials = [
    {
        iconUrl: <LinkedinSocialIcon />,
        linkUrl: 'https://www.linkedin.com/company/hashupit'
    },
    {
        iconUrl: <TelegramSocialIcon />, 
        linkUrl: 'https://t.me/HashUpAnnouncements'
    }, 
    {
        iconUrl: <TwitterSocialIcon />,
        linkUrl: 'https://twitter.com/HashUp_it'
    },
    {
        iconUrl: <FacebookSocialIcon />,
        linkUrl: 'https://www.facebook.com/HashUpIt',
    },
    {
        iconUrl: <InstagramSocialIcon />,
        linkUrl: 'https://www.instagram.com/hashup.it/'
    }
]

export const FooterSocials = () => {
    return (
        <Flex gridGap="10px">
            {socials.map((element) => (
                <SocialIcon key={element.linkUrl} {...element} />
            ))}
        </Flex>
    )
}
