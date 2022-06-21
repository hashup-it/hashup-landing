import { SocialMediaUrls } from '../../config';
import FacebookSocialIcon from '../../Icons/facebookSocialIcon';
import LinkedinIcon from '../../Icons/linkedinIcon';
import TelegramSocialIcon from '../../Icons/telegramSocialIcon';
import TwitterSocialIcon from '../../Icons/twitterSocialIcon';
import MediumIcon from '../../Icons/mediumIcon';
import DiscordSocialIcons from '../../Icons/discordSocialIcons';
import InstagramSocialIcon from '../../Icons/instagramSocialIcon';

export const Socials = [
	{
		name: 'Twitter',
		logo: <TwitterSocialIcon />,
		link: SocialMediaUrls.twitter,
	},
	{
		name: 'Discord',
		logo: <DiscordSocialIcons />,
		link: SocialMediaUrls.discord,
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
