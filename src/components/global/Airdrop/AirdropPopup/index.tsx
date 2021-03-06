import { AddToMetamask } from "components/shared/Header/BottomNav/AddToMetamask"
import { StyledColoredText } from "components/shared/utils.styles"
import { FC } from "react"
import {
    StyledAddToMetamaskGroup,
    StyledAirdropPopupWrapper,
    StyledClose,
    StyledMediaIcon,
    StyledPopupHeader,
    StyledPopupText,
    StyledPopupWindow,
    StyledPopupWindowWrapper,
    StyledTelegramContainer,
    StyledTelegramHeader,
    StyledTelegramIconWrapper,
    StyledTelegramLink,
    StyledTelegramText,
} from "./index.styles"
import { useTranslation } from "react-i18next"

interface AidropPopupProps {
    setPopupOpened: (v: boolean) => void
}

export const AirdropPopup: FC<AidropPopupProps> = ({ setPopupOpened }) => {
    const { t } = useTranslation()

    return (
        <StyledAirdropPopupWrapper>
            <StyledPopupWindowWrapper>
                <StyledPopupWindow>
                    <StyledClose
                        onClick={() => setPopupOpened(false)}
                        src="/assets/icons/x-circle.svg"
                    />
                    <StyledPopupHeader>{t("airdrop.popup.header")}</StyledPopupHeader>
                    <StyledPopupText>
                        {t("airdrop.popup.text-sent")}
                        <StyledColoredText>#Hash</StyledColoredText>
                        {t("airdrop.popup.text-address")}
                    </StyledPopupText>
                    <StyledAddToMetamaskGroup>
                        {t("airdrop.popup.metamask")} &gt; <AddToMetamask />
                    </StyledAddToMetamaskGroup>
                    <StyledTelegramContainer>
                        <StyledTelegramHeader>
                            <StyledColoredText>Obserwuj</StyledColoredText>
                            <br /> nasze social media
                        </StyledTelegramHeader>
                        <StyledTelegramLink>
                            <a href="https://t.me/HashUpAnnouncements">
                                <StyledTelegramIconWrapper>
                                    <StyledMediaIcon src="/assets/icons/twitter.svg" />
                                </StyledTelegramIconWrapper>
                            </a>
                            <StyledTelegramText>
                                <StyledColoredText>Announcement</StyledColoredText>
                                <br />
                                Twitter
                            </StyledTelegramText>
                        </StyledTelegramLink>
                        <StyledTelegramLink>
                            <a href="https://t.me/HashUpAnnouncements">
                                <StyledTelegramIconWrapper>
                                    <StyledMediaIcon src="/assets/icons/telegram.svg" />
                                </StyledTelegramIconWrapper>
                            </a>
                            <StyledTelegramText>
                                <StyledColoredText>Announcement</StyledColoredText>
                                <br />
                                Telegram
                            </StyledTelegramText>
                        </StyledTelegramLink>
                    </StyledTelegramContainer>
                </StyledPopupWindow>
            </StyledPopupWindowWrapper>
        </StyledAirdropPopupWrapper>
    )
}
