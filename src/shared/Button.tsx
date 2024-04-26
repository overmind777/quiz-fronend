import styled from "styled-components"

type Children = {
  nameButton: string;
}

const Button = ({ nameButton }: Children) => {
    return (
        <div>
            <ButtonStyled>{nameButton}</ButtonStyled>
        </div>
    )
}

export default Button

const ButtonStyled = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 24px 12px 24px;
    background-color: transparent;

    box-sizing: border-box;
    border: 1px solid rgba(244, 244, 244, 0.6);
    border-radius: 30px;

    color: rgb(244, 244, 244);
    font-family: Adamina;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: -1%;
    text-align: left;

    cursor: pointer;
`
