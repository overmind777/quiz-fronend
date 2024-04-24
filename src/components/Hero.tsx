import styled from 'styled-components'

const Hero = () => {
    return (
        <SectionStyled>
            <TopBlocWrapper>
                <TextStyled>Hello visitor!</TextStyled>
                <TextStyled>
                    On the site you will find quizzes and quizzes with various
                    types of questions: cinema, music, logic and others. Quizzes
                    differ in the degreeof difficulty of questions, the number
                    and type of questions.
                </TextStyled>
            </TopBlocWrapper>
            <H2Wrapper>
                <H2Styled>Are you ready to take the Quiz? </H2Styled>
            </H2Wrapper>
        </SectionStyled>
    )
}

export default Hero

const SectionStyled = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: start;
`

const TopBlocWrapper = styled.div`
    width: 397px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 124px;

    color: rgb(244, 244, 244);
    font-family: Adamina;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -1%;
    text-align: left;
`

const TextStyled = styled.p`
    color: rgb(244, 244, 244);
    font-family: Adamina;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -1%;
    text-align: left;
`

const H2Wrapper = styled.div`
    width: 924px;

    color: rgb(244, 244, 244);
    font-family: Adamina;
    font-size: 120px;
    font-weight: 400;
    line-height: 110px;
    letter-spacing: -1%;
    text-align: left;
`

const H2Styled = styled.h2`
    color: rgb(244, 244, 244);
    font-family: Adamina;
    font-size: 120px;
    font-weight: 400;
    line-height: 110px;
    letter-spacing: -1%;
    text-align: left;
`
