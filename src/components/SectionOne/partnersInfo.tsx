import { Image } from "@chakra-ui/react";
import BlockchainAllianceLogo from "../../Icons/blockchainAllianceLogo";
import PatchkitLogo from "../../Icons/patchkitLogo";
import PolygonLogo from "../../Icons/polygonLogo";

export const PartnersInfo = [
  {
    name: "Blockchain Alliance",
    logo: <Image src="assets/blockchainAllianceLogo.png" mr="100px" />,
  },
  {
    name: "Patchkit",
    logo: <PatchkitLogo mr="100px"/>,
  },
  {
    name: "Gravity",
    logo: <Image src="assets/gravityTeamLogo.png" mr="100px" />,
  },
  {
    name: "Synapse",
    logo: <Image src="assets/synapseLogo.png" mr="100px" />,
  },
  {
    name: "AdShares",
    logo: <Image src="assets/adsharesLogo.png" mr="100px" />,
  },
];
