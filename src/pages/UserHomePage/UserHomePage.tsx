import CreateQuizLink from '../../shared/CreateQuizLink'
import {
    StyledBox,
    StyledContainer,
    // StyledContainer2,
    StyledH2,
    // StyledH3,
    // StyledLastUl,
    // StyledLastWrapper,
    // StyledLi,
    // StyledNavLink,
    // StyledP,
    // StyledSideWrapper,
    // StyledSpan,
    // StyledUl,
    // StyledUserAvatar,
    // StyledUserName,
    // StyledUserWrapper,
} from './UserHomePage.Styled'

const UserHomePage = () => {
    return (
        <StyledBox>
            <StyledContainer>
                <StyledH2>Home</StyledH2>
                <CreateQuizLink />
            </StyledContainer>
            {/* {userIsLoading ? (
        <Loader />
      ) : (
        <StyledContainer2>
          <StyledUserWrapper>
            <StyledUserAvatar
              src={
                avatar.includes("gravatar.com/avatar/")
                  ? `https:${avatar}`
                  : avatar
              }
              alt="User Avatar"
            />
            <StyledUserName>{user.name}</StyledUserName>
            <StyledUl>
              <StyledLi>
                <StyledP>Passed quizzes</StyledP>
                <StyledSpan>{user.passedQuizzes?.length}</StyledSpan>
              </StyledLi>
              <StyledLi>
                <StyledP>Average success</StyledP>
                <StyledSpan>{user.average}%</StyledSpan>
              </StyledLi>
            </StyledUl>
          </StyledUserWrapper>
          <StyledSideWrapper>
            <StyledLastWrapper>
              <StyledH3>Last passed quizzes</StyledH3>
              <StyledNavLink to="/lastPassedQuizzes">See all</StyledNavLink>
            </StyledLastWrapper>
            <StyledLastUl>
              {quizIsLoading ? (
                <Loader />
              ) : (
                quizes?.map((quiz, index) => {
                  if (index < 3) {
                    return (
                      <QuizListItem
                        key={quiz._id}
                        id={quiz._id}
                        theme={quiz.theme}
                        rating={quiz.rating}
                        ageGroup={quiz.ageGroup}
                        finished={quiz.finished}
                        owner={quiz.owner}
                      />
                    );
                  }
                })
              )}
            </StyledLastUl>
          </StyledSideWrapper>
        </StyledContainer2>
      )} */}
        </StyledBox>
    )
}

export default UserHomePage
