import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { userSelector } from '../redux/auth/slice'

const Header = () => {
    const navigate = useNavigate()
    const loginSelector = useSelector(userSelector).isLoggedIn

    const handleClick = () => {
        navigate('/home')
    }

    return (
        <HeaderStyled>
            <StyledLogo onClick={handleClick}>QuizMaster</StyledLogo>
            {!loginSelector ? (
                <>
                    <LeftWrapper>
                        <StyledNavLink to={'/adults'}>For Adults</StyledNavLink>
                        <StyledNavLink to={'/children'}>
                            For Children
                        </StyledNavLink>
                    </LeftWrapper>
                    <RightWrapper>
                        <RegisterBtnWrapper>
                            <StyledNavLink to={'auth/register'}>
                                Register
                            </StyledNavLink>
                        </RegisterBtnWrapper>
                        <StyledNavLink to={'auth/login'}>Login</StyledNavLink>
                    </RightWrapper>
                </>
            ) : (
                <>
                    <LeftWrapper>
                        <StyledNavLink to={'/home'}>Home</StyledNavLink>
                        <StyledNavLink to={'/discover'}>
                            Discover
                        </StyledNavLink>
                        <StyledNavLink to={'/favorite'}>Favorite quize</StyledNavLink>
                        <StyledNavLink to={'/myQuiz'}>
                            My quize
                        </StyledNavLink>
                    </LeftWrapper>
                    <RightWrapper>
                        <RegisterBtnWrapper>
                            <StyledNavLink to={'auth/register'}>
                                Register
                            </StyledNavLink>
                        </RegisterBtnWrapper>
                        <StyledNavLink to={'auth/login'}>Login</StyledNavLink>
                    </RightWrapper>
                </>
            )}
        </HeaderStyled>
    )
}

export default Header

const StyledNavLink = styled(NavLink)`
    color: rgb(244, 244, 244);
    font-family: Adamina;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -1%;
    text-align: left;
    text-decoration: none;
    &:hover {
        color: #205bf1;
    }
`

const HeaderStyled = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 142px;
`

const LeftWrapper = styled.div`
    display: flex;
    gap: 20px;
`

const RightWrapper = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    ${StyledNavLink}:last-of-type {
        text-decoration: underline;
    }
`

const StyledLogo = styled.h2`
    color: rgb(244, 244, 244);
    font-family: Adamina;
    font-size: 24px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -1%;
    text-align: left;
    cursor: pointer;
`

const RegisterBtnWrapper = styled.div`
    padding: 16px 32px;
    box-sizing: border-box;

    border: 1px solid rgba(244, 244, 244, 0.6);
    border-radius: 30px;
    ${StyledNavLink}:last-of-type {
        text-decoration: none;
    }
    &:hover {
        background: rgb(32, 91, 241);
        ${StyledNavLink}:last-of-type {
            color: #f4f4f4;
        }
    }
    cursor: pointer;
`
