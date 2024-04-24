import styled from "styled-components"
import QuizesItem from "./QuizesItem"


const QuizesList = () => {
  return (
    <ListStyled>
      <QuizesItem/>
    </ListStyled>
  )
}

export default QuizesList

const ListStyled = styled.ul`
    padding: 0;
    list-style: none;
`
