import React from 'react'
import { ICommunityButtons } from "./communityButtons";
import LinkedinIcon from "../../Icons/linkedinIcon";
import TelegramIcon from "../../Icons/telegramIcon";
import TwitterIcon from "../../Icons/twitterIcon";
import DiscordIcon from "../../Icons/discordIcon";


export const CommunityInfo = [
    {
      icon: <TelegramIcon />,
      name: "Telegram",
      description:
        "Join our channel and get in touch with team members and supporters!",
    },
    {
      icon: <DiscordIcon />,
      name: "Discord",
      description:
        "Join the server and connect with game devs and gamers around the world!",
    },
    {
      icon: <TwitterIcon />,
      name: "Twitter",
      description:
        "Get the most insightful tweets about our project and community",
    },
    {
      icon: <LinkedinIcon />,
      name: "LinkedIn",
      description: "Connect with us and expand your network",
    },
  ];
export default CommunityInfo