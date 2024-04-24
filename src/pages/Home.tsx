import styled from 'styled-components'
import QuizesList from '../components/QuizesList'
import Hero from '../components/Hero'

const Home = () => {
    return (
      <>
        <Hero/>
            <AdultsSectionStyled>
                <QuizesList />
            </AdultsSectionStyled>
            <ChildrenSectionStyled>
                <QuizesList />
            </ChildrenSectionStyled>
        </>
    )
}

export default Home

const AdultsSectionStyled = styled.section``

const ChildrenSectionStyled = styled.section``
