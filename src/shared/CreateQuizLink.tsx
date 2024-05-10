import { Link } from 'react-router-dom'

// import sprite from '../../public/icons/sprite.svg'

import styled from 'styled-components'

const CreateQuizLink = () => {
    return (
        <StyledLink to="/createQuiz">
            <StyledContainer>
                <StyledSvg
                    // sprite={sprite}
                    id="icon-plus"
                    width={24}
                    height={24}
                    fill="#205bf1"
                />
                <StyledP>Create quiz</StyledP>
            </StyledContainer>
        </StyledLink>
    )
}

export default CreateQuizLink



const StyledContainer = styled.div`
    display: flex;
    align-items: center;
`

const StyledSvg = styled.svg`
    border: 1px solid #205bf1;
    border-radius: 30px;
    padding: 8px;
    width: 40px;
    height: 40px;

    stroke: #205bf1;

    transition-property: stroke border;

   
`

const StyledP = styled.p`
    font-weight: 700;
    font-size: 20px;
    line-height: 1.4;

    margin-left: 16px;

    transition-property: color;

`

const StyledLink = styled(Link)`
    color: inherit;

    &:visited {
        color: inherit;
    }

    &:hover p,
    &:focus p {
        color: #144ad5;
    }

    &:hover svg,
    &:focus svg {
        border-color: #144ad5;
    }

    &:hover use,
    &:focus use {
        stroke: #144ad5;
    }
`
