import styled from 'styled-components'
import QuizesList from '../components/QuizesList'
import Hero from '../components/Hero'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <Hero />
            <AdultsSectionStyled>
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
                  <NavLinkStyled to={'/adults'}>See all</NavLinkStyled>
                </TextWrapper>
                <QuizesList ageGroup={'adults'} param={false} />
            </AdultsSectionStyled>
            <ChildrenSectionStyled>
                <TitleStyled>For Children</TitleStyled>
                <TextWrapper>
                  <Wrapper>
                      <TextStyled>
                          Engaging and fun quizzes designed specifically for kids.
                          Dive into a world of colorful questions on movies,
                          music, and much more. Perfect for young curious minds! A
                          safe space for children to learn, play, and grow their
                          knowledge.
                      </TextStyled>
                  </Wrapper>
                  <NavLinkStyled to={'/children'}>See all</NavLinkStyled>
                </TextWrapper>
                <QuizesList ageGroup={'children'} />
            </ChildrenSectionStyled>
        </>
    )
}

export default Home

const AdultsSectionStyled = styled.section`
  margin-bottom: 120px;
`

const ChildrenSectionStyled = styled.section``

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
