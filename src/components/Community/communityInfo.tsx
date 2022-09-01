import React from 'react';
import LinkedinIcon from '../../Icons/linkedinIcon';
import TelegramIcon from '../../Icons/telegramIcon';
import TwitterIcon from '../../Icons/twitterIcon';
import DiscordIcon from '../../Icons/discordIcon';
import { SocialMediaUrls } from '../../config';

export const CommunityInfo = [
	{
		icon: <TwitterIcon />,
		name: 'Twitter',
		description: 'Get the most insightful tweets about our project and community',
		link: SocialMediaUrls.twitter,
	},
	{
		icon: <TelegramIcon />,
		name: 'Telegram',
		description: 'Join our channel and get in touch with team members and supporters!',
		link: SocialMediaUrls.telegram,
	},
	{
		icon: <DiscordIcon />,
		name: 'Discord',
		description: 'Join the server and connect with game devs and gamers around the world!',
		link: SocialMediaUrls.discord,
	},
	{
		icon: <LinkedinIcon />,
		name: 'LinkedIn',
		description: 'Connect with us and expand your network',
		link: SocialMediaUrls.linkedIn,
	},
];
export default CommunityInfo;
