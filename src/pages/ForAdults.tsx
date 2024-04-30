import styled from 'styled-components'
import QuizesList from '../components/QuizesList'
import UseQuizzes from '../hooks/UseQuizzes'

const ForAdults = () => {
  const { quizzes, loading, error } = UseQuizzes('adults')
  const adultsQuizzes = quizzes.filter((q) => q.ageGroup === 'adults')

    if (loading) {
        return <p>Loading ...</p>
    }

    if (error) {
        return <p>Error</p>
    }

    return (
        <>
            <TitleStyled>For Adults</TitleStyled>
            <TextWrapper>
                <Wrapper>
                    <TextStyled>
                        Dive deep into a world of intriguing quizzes tailored
                        for adults. From cinema to logic, challenge your
                        knowledge and discover where your expertise lies.
                        Explore a diverse range of topics and test the depths of
                        your knowledge.
                    </TextStyled>
                </Wrapper>
            </TextWrapper>
            <QuizesList quizzes={adultsQuizzes} />
        </>
    )
}

export default ForAdults

const TitleStyled = styled.h2`
    margin-bottom: 24px;
    color: rgb(244, 244, 244);
    font-family: Adamina;
    font-size: 44px;
    font-weight: 400;
    line-height: 48px;
    letter-spacing: -1%;
    text-align: left;
`

const TextWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const Wrapper = styled.div`
    width: 660px;
    margin-bottom: 48px;
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
