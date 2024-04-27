import styled from 'styled-components'
import QuizesItem from './QuizesItem'
import { useSelector } from 'react-redux'

import { quizSelector } from '../redux/quizes/slice'
import CreateNewQuiz from './CreateNewQuiz'

const QuizesList = ({ ageGroup, param }) => {
    
    const quizes = useSelector(quizSelector)

    const filteredQuizes = quizes.filter((q) => q.ageGroup === ageGroup)

    return (
        <ListStyled>
            {param ? <CreateNewQuiz /> : null}
            {filteredQuizes?.map((quiz, idx) => (
                <QuizesItem data={quiz} key={idx} />
            ))}
        </ListStyled>
    )
}

export default QuizesList

const ListStyled = styled.ul`
    display: flex;
    gap: 24px;
    padding: 0;
    list-style: none;
`
