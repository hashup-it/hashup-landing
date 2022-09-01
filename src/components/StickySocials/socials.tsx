import { SocialMediaUrls } from '../../config';
import FacebookSocialIcon from '../../Icons/facebookSocialIcon';
import TelegramSocialIcon from '../../Icons/telegramSocialIcon';
import TwitterSocialIcon from '../../Icons/twitterSocialIcon';
import MediumIcon from '../../Icons/mediumIcon';
import DiscordSocialIcons from '../../Icons/discordSocialIcons';
import InstagramSocialIcon from '../../Icons/instagramSocialIcon';
import LinkedinSocialIcon from '../../Icons/linkedinSocialIcon';
import TelegramPLSocialIcon from '../../Icons/telegramPLSocialIcon';

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
		name: 'TelegramPL',
		logo: <TelegramPLSocialIcon />,
		link: SocialMediaUrls.telegramPL,
	},
	{
		name: 'Discord',
		logo: <DiscordSocialIcons />,
		link: SocialMediaUrls.discord,
	},
	{
		name: 'LinkedIn',
		logo: <LinkedinSocialIcon />,
		link: SocialMediaUrls.linkedIn,
	},
	{
		name: 'Facebook',
		logo: <FacebookSocialIcon />,
		link: SocialMediaUrls.facebook,
	},
	{
		name: 'Instagram',
		logo: <InstagramSocialIcon />,
		link: SocialMediaUrls.instagram,
	},
	{
		name: 'Medium',
		logo: <MediumIcon />,
		link: SocialMediaUrls.medium,
	},
];
