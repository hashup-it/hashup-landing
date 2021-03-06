import { assetsUrl } from "config"
import styled, { css, keyframes } from "styled-components"
import { Swatches } from "__styles__/consts"
import { MediaQuery } from "__styles__/consts"

export const StyledWrapper = styled.div`
    cursor: grab;
    padding: 4px 0;
    flex-shrink: none;
    width: 440px;

    ${MediaQuery.tablet} {
        width: 330px;
    }
`

export const StyledInfoBox = styled.div<{ highlighted: boolean }>`
    margin: auto;
    box-sizing: border-box;
    user-select: none;
    width: 367px;
    flex-shrink: none;
    height: 475px;
    padding: 40px 40px;
    text-align: left;
    position: relative;
    transform-style: preserve-3d;
    background: linear-gradient(180deg, #010101 0%, ${Swatches.background_main} 100%);
    border-radius: 40px;

    ${MediaQuery.tablet} {
        padding: 35px 25px;
        width: calc(100% - 20px); // Make some margin
    }

    ${props =>
        props.highlighted &&
        css`
            // Outline
            :before {
                content: "";
                display: block;
                position: absolute;
                width: calc(100% - 2px);
                height: calc(100%);
                padding: 2px;
                left: 0px;
                top: -1px;
                transform: translateZ(-1px);
                border: 0px solid transparent;
                border-radius: 40px;
                background: linear-gradient(
                    90deg,
                    rgba(0, 0, 0, 0) 30%,
                    ${Swatches.primary_color} 100%
                );
            }
        `}
`

export const StyledLabel = styled.span`
    font-size: 24px;
    text-align: left;

    :before {
        display: block;
        content: "";
        width: 25px;
        height: 2px;
        background-color: ${Swatches.primary_color};
        margin-bottom: 20px;
    }
`

export const StyledBulletsList = styled.ul`
    list-style-type: none;
    margin-top: 28px;
    padding: 0;
`

const rotateAnim = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

export const StyledBullet = styled.li<{ isDone: boolean; bold: boolean }>`
    margin-bottom: 10px;
    display: flex;

    div.icon {
        border-radius: 100px;
        height: 20px;
        width: 20px;
        margin-right: 18px;

        ${props =>
            props.isDone
                ? css`
                      // Icon
                      border: ${Swatches.primary_color} 1px solid;
                      background-image: url(${() => assetsUrl("icons/done.svg")});
                      background-repeat: no-repeat;
                      background-size: 10px;
                      background-position: center;
                  `
                : css`
                      border-right: ${Swatches.primary_color} 1px solid;
                      border-bottom: ${Swatches.primary_color} 1px solid;
                      animation: ${rotateAnim} 3s linear infinite;
                  `}
    }

    div.content {
        padding-top: 4px; // To center vertically with icon
        flex: 1;
        font-size: 13px;
        line-height: 130%;
        font-weight: 300;

        ${props =>
            props.bold &&
            css`
                font-weight: bold;
            `}
    }
`
