import styled from "styled-components"
import QuizesList from "../components/QuizesList"
import UseQuizzes from "../hooks/UseQuizzes"


const ForChildren = () => {
  const { quizzes, loading, error } = UseQuizzes('children')
  const childrenQuizzes = quizzes.filter((q) => q.ageGroup === 'children')

  if (loading) {
      return <p>Loading ...</p>
  }

  if (error) {
      return <p>Error</p>
  }

  return (
      <>
          <TitleStyled>For Children</TitleStyled>
          <TextWrapper>
              <Wrapper>
                  <TextStyled>
                      Engaging and fun quizzes designed specifically for kids.
                      Dive into a world of colorful questions on movies, music,
                      and much more. Perfect for young curious minds! A safe
                      space for children to learn, play, and grow their
                      knowledge.
                  </TextStyled>
              </Wrapper>
          </TextWrapper>
          <QuizesList quizzes={childrenQuizzes} />
      </>
  )
}

export default ForChildren

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