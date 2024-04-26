import sprite from '/icons/sprite.svg'
import styled from 'styled-components'
import ButtonStyled from '../shared/Button'

const QuizesItem = () => {
    return (
        <ItemStyled>
            <TopWrapper>
                <SvgStyled width={20} height={20}>
                    <use href={`${sprite}#icon-users`}></use>
                </SvgStyled>
                <SvgStyled width={20} height={20}>
                    <use href={`${sprite}#icon-heart`}></use>
                </SvgStyled>
            </TopWrapper>
            <MiddleWrapper>
                <TitleStyled>Title</TitleStyled>
                <CategoryStyled>Category</CategoryStyled>
                <SvgStyled width={20} height={20}>
                    <use href={`${sprite}#icon-rating`}></use>
                </SvgStyled>
            </MiddleWrapper>
        <ButtonStyled nameButton={'Start'} />
        </ItemStyled>
    )
}

export default QuizesItem

const ItemStyled = styled.li`
    width: 292px;
    height: 364px;
    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 20px;
    padding-top: 24px;
    padding-inline: 24px;
    padding-bottom: 100px;

    background: rgba(255, 255, 255, 0.02);
`

const TopWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    margin-bottom: 56px;
`

const SvgStyled = styled.svg`
    fill: white;
    stroke: white;
`

const MiddleWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 32px;
`

const TitleStyled = styled.h3`
    margin-bottom: 8px;

    color: rgba(244, 244, 244, 0.5);
    font-family: Adamina;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -1%;
    text-align: left;
`

const CategoryStyled = styled.h2`
    margin-bottom: 16px;

    color: rgb(244, 244, 244);
    font-family: Adamina;
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0%;
    text-align: left;
`


