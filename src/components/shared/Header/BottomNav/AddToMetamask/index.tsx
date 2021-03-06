import { useTranslation } from "react-i18next"
import { StyledMetamaskButton } from "./index.styles"
import { SocialMediaIcons } from "config"
import Image from "next/image"

export const AddToMetamask = () => {
    const { t } = useTranslation()

    const handleAddToMetamask = async () => {
        const tokenAddress = "0x2ce9daaaecf41914504d60ea9c7c8df1dc44ba9f"
        const tokenSymbol = "Hash"
        const tokenDecimals = 18
        const tokenImage = "https://i.ibb.co/QrPpyW3/icon-metamask.png"

        try {
            const wasAdded: boolean = await (window as any).ethereum.request({
                method: "wallet_watchAsset",
                params: {
                    type: "ERC20", // Initially only supports ERC20, but eventually more!
                    options: {
                        address: tokenAddress, // The address that the token is at.
                        symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
                        decimals: tokenDecimals, // The number of decimals in the token
                        image: tokenImage, // A string url of the token logo
                    },
                },
            })

            if (wasAdded) {
                console.log("Thanks for your interest!")
            } else {
                console.log("Your loss!")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <StyledMetamaskButton onClick={handleAddToMetamask}>
            <div className="icon-wrapper">
                <Image src={SocialMediaIcons.metamask} alt="Metamask icon" width={18} height={18} />
            </div>
            <span className="text">{t("home.header.add-hash-wallet")}</span>
        </StyledMetamaskButton>
    )
}
