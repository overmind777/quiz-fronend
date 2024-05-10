import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledBox = styled.div`
    padding-top: 80px;
    padding-bottom: 80px;
`

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: flex-start;
`

export const StyledH2 = styled.h2`
    font-weight: 700;
    font-size: 32px;
    line-height: 1.1875;
    letter-spacing: -0.01em;

    margin-bottom: 20px;
`

export const StyledContainer2 = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 40px;
`

export const StyledUserWrapper = styled.div`
    border-radius: 20px;
    background: #205bf1;

    padding-top: 32px;
    padding-bottom: 32px;
    padding-inline: 32px;
`

export const StyledUserAvatar = styled.img`
    border-radius: 100px;
    width: 100px;
    height: 100px;

    margin-bottom: 8px;
`

export const StyledUserName = styled.p`
    font-weight: 700;
    font-size: 20px;
    line-height: 1.4;
`

export const StyledP = styled.p`
    font-size: 14px;
    line-height: 1.14286;
    letter-spacing: -0.01em;
    text-align: center;
    color: rgba(244, 244, 244, 0.6);
    margin-bottom: 10px;
`

export const StyledSpan = styled.span`
    font-weight: 700;
    font-size: 20px;
    line-height: 1.4;
    text-transform: uppercase;
    text-align: center;
`

export const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;

    margin-top: 32px;
    gap: 32px;
`

export const StyledLi = styled.li`
    position: relative;
    &:not(:last-child)::after {
        position: absolute;
        width: 100%;
        height: 1px;
        bottom: -16px;
        left: 0;
        content: '';
        background-color: rgba(244, 244, 244, 0.2);
    }
`

export const StyledSideWrapper = styled.div``

export const StyledLastWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    margin-top: 80px;
`

export const StyledH3 = styled.h3`
    font-weight: 700;
    font-size: 20px;
    line-height: 1.4;
`

export const StyledNavLink = styled(NavLink)`
    font-weight: 700;
    font-size: 14px;
    line-height: 1.14286;
    letter-spacing: -0.01em;
    text-decoration: underline;
    color: #f4f4f4;

    &:visited {
        color: #f4f4f4;
    }

    &:hover,
    &:focus {
        color: #205bf1;
    }
    transition-property: color;
`

export const StyledLastUl = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    gap: 20px;

    margin-top: 40px;
`
