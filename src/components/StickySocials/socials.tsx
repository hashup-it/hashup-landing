import { SocialMediaUrls } from '../../config';
import FacebookSocialIcon from '../../Icons/facebookSocialIcon';
import LinkedinIcon from '../../Icons/linkedinIcon';
import TelegramSocialIcon from '../../Icons/telegramSocialIcon';
import TwitterSocialIcon from '../../Icons/twitterSocialIcon';

export const Socials = [
	{
		name: 'Twitter',
		logo: <TwitterSocialIcon />,
		link: SocialMediaUrls.twitter,
	},
	{
		name: 'Telegram',
		logo: <TelegramSocialIcon />,
		link: SocialMediaUrls.telegram,
	},
	{
		name: 'LinkedIn',
		logo: <LinkedinIcon />,
		link: SocialMediaUrls.linkedIn,
	},
	{
		name: 'Facebook',
		logo: <FacebookSocialIcon />,
		link: SocialMediaUrls.facebook,
	},
];
