import styled from "styled-components"
import QuizesItem from "./QuizesItem"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, Query } from "../redux/types"
import {  getAllQuizes } from "../redux/quizes/operations"
import { quizSelector } from "../redux/quizes/slice"



const QuizesList: React.FC<Query> = ({ ageGroup }) => {

  const dispatch = useDispatch<AppDispatch>()
  const quizes = useSelector(quizSelector)

  const filteredQuizes = quizes.filter(q => q.ageGroup === ageGroup)
  

  useEffect(() => {
      dispatch(getAllQuizes({ page: 1, pageSize: 10 }))
  }, [dispatch])

  return (
      <ListStyled>
          {filteredQuizes?.map((quiz, idx) => (
              <QuizesItem
                  data={quiz}
                  key={idx}
              />
          ))}
      </ListStyled>
  )
}

export default QuizesList

const ListStyled = styled.ul`
    padding: 0;
    list-style: none;
`
