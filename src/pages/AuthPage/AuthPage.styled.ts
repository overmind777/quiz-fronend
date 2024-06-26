import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const StyledRegisterWrapp = styled.div`
    margin: 40px 20px;
`

export const StyledTitle = styled.h3`
    font-family: inherit;
    font-weight: 700;
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: -0.01em;
    color: #f4f4f4;
`

export const StyledAuthForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 14px;

    margin-top: 32px;
    margin-bottom: 16px;
    width: 295px;
`

export const StyledAuthInput = styled.input`
    position: relative;
    border: 1px solid rgba(244, 244, 244, 0.6);
    border-radius: 30px;
    padding-left: 18px;
    padding-right: 15px;
    height: 44px;
    background-color: transparent;
    color: #fafafa;
    width: 295px;

    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.14286;
    letter-spacing: -0.01em;

    && {
        color: #fafafa;
        border: 1px solid rgba(250, 250, 250, 0.2);
        outline: none;

        &:focus {
            border-color: #097b45;
            color: #fafafa;
        }

        &:hover {
            border-color: #fafafa;
        }

        &.valid {
            border-color: #097b45;
        }

        &.invalid {
            border-color: #e74a3b;
        }

        &::placeholder {
            margin-left: 18px;
            white-space: nowrap;
            color: rgba(244, 244, 244, 0.4);
        }
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        transition: background-color 5000s ease-in-out 0s;
        -webkit-text-fill-color: #fafafa !important;
        caret-color: #fafafa !important;
    }
`

export const AuthLink = styled(NavLink)`
    color: #f4f4f4 !important;
    text-decoration: underline;
    text-align: center;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.14286;
    letter-spacing: -0.01em;
    font-family: inherit;
`

export const RestoreBtnStyled = styled.a`
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.14286;
    letter-spacing: -0.01em;
    color: rgba(244, 244, 244, 0.5) !important;
    margin-bottom: 16px;
    text-align: center;
`

export const StyledLogoutWrapp = styled.div`
    margin: 104px 20px;
`

export const StyledLogoutTitle = styled.h3`
    font-family: inherit;
    font-weight: 700;
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: -0.01em;
    color: #f4f4f4;
    text-align: center;
    margin-bottom: 18px;
`

export const StyledText = styled.p`
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.28571;
    letter-spacing: -0.01em;
    text-align: center;
    color: #f4f4f4;
    margin-bottom: 16px;
`

export const StyledCanceLink = styled.a`
    color: #f4f4f4 !important;
    text-decoration: underline;
    text-align: center;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.14286;
    letter-spacing: -0.01em;
    font-family: inherit;
    margin-top: 16px;
    cursor: pointer;
`

export const PasswordToggle = styled.button`
    position: absolute;
    top: 55%;
    right: 13px;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    font-size: 14px;

    /* Задаємо розміри для SVG */
    svg {
        width: 18px;
        height: 18px;
    }
`
export const WrapPass = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
`
export const WrapInPass = styled.div`
    position: relative;
`

export const StyledError = styled.p`
    font-weight: 400;
    font-size: 10px;
    text-align: left;
    color: #e74a3b;
    margin-left: 18px;
`

export const ValidationError = styled.div`
    font-family: inherit;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.14286;
    letter-spacing: -0.01em;
    color: #e74a3b;
    text-align: center;
`
