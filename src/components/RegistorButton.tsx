import styled from 'styled-components'

interface RegisterButtonProps {
    onClick: () => void
    children: string
}

const RegisterButton = ({ onClick, children }: RegisterButtonProps) => {
    return <RegisterStyled onClick={onClick}>{children}</RegisterStyled>
}

export default RegisterButton

const RegisterStyled = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 30px;
    padding: 16px 13px;
    margin-top: 18px;
    width: auto;

    background: #205bf1;

    font-weight: 700;
    font-size: 14px;
    line-height: 1.14286;
    letter-spacing: -0.01em;

    color: #fff;

    border: transparent;

    &:visited {
        background: #144ad5;
    }

    &:hover,
    &:focus {
        background: #144ad5;
        transition: background 0.3s ease-in-out;
    }

    transition-property: background;
`
