import { NavLink } from 'react-router-dom'

import styled from 'styled-components'

type Link = {
    link: string
}

const LinkSeeAll = ({ link }: Link) => {
    return (
        <>
            <NavLinkStyled to={link}>See all</NavLinkStyled>
        </>
    )
}

export default LinkSeeAll

const NavLinkStyled = styled(NavLink)`
    color: rgb(244, 244, 244);
    font-family: Adamina;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: -1%;
    text-align: left;
    text-decoration-line: underline;
`
