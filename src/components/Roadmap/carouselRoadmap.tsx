import React from "react";
import RoadmapCard from "./roadmapCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Flex, Text } from "@chakra-ui/react";
import { IRoadmapCardIRoadmapCard } from "./roadmapCard";

const handleDragStart = (e) => e.preventDefault();

const responsive = {
  0: {
    items: 1,
  },
  1024: {
    items: 3,
  },
};

const itemsData: IRoadmapCardIRoadmapCard[] = [
  {
    quarter: "Q2 2022",
    data: [
      { data: "Blockchain Explorer for gamers", isDone: true },
      { data: "Web2 Games Marketplace", isDone: true },
      { data: "PC Launcher with Metamask", isDone: true },
      { data: "First Games on our platform", isDone: true },
      { data: "GameXplorer - first blockchain explorer for gamers", isDone: true },
      { data: "GameContract - devkit for gamedevelopers and publishers", isDone: true },
      { data: "First exclusive game on HashUp", isDone: true },
    ],
  },
  {
    quarter: "Q3 2022",
    data: [
      { data: "TOP CEX partnerships",},
      { data: "TOP Gaming partnerships" },
      { data: "TOP Crypto partnerships" },
      { data: "More Games on our platforms. Games each week!" },
      { data: "Game comments and reviews" },
    ],
  },
  {
    quarter: "Q4/Q1 2023 - LISTING",
    data: [
      { data: "Listing on DEX and TOP CEX"},
      { data: "First AA+/AAA game premiere" },
      { data: "GameCap.io - computer games’ ranking" },
      { data: "Listing of 50+ games" },
      { data: "PipBoy Metamask Unity/Unreal Plugin" },
      { data: "Cloud Saves" },
      { data: "Run GameSwapping" },

    ],
  },
  {
    quarter: "2023+",
    data: [
      { data: "Decentralized superconsole"},
      { data: "Social Media Based on ERC20 Games ownership" },
      { data: "GameWallet - Crypto Wallet with communicator for gamers and degens" },
      { data: "ERC20 DLCs Licensing" },
      { data: "HashUp becomes publisher" },
      { data: "Open Source AAA Games" },
    ],
  },
];

export const CarouselRoadmap = () => {
  return (
    <AliceCarousel
      items={itemsData.map((data) => (
        <RoadmapCard quarter={data.quarter} data={data.data} />
      ))}
      mouseTracking
      controlsStrategy="alternate"
      disableButtonsControls
      paddingLeft={90}
      paddingRight={90}
      responsive={responsive}
    />
  );
};

export default CarouselRoadmap;
