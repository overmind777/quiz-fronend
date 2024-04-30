import styled from 'styled-components'
import QuizesItem from './QuizesItem'
import { QuizBody } from '../redux/types'

interface QuizeListProps {
    quizzes: QuizBody[]
}

const QuizesList: React.FC<QuizeListProps> = ({ quizzes }) => {
    return (
        <ListStyled>
            <ItemStyled>
                <Wrapper>
                    <PlusWrapper>+</PlusWrapper>
                    <TextStyled>Create quiz</TextStyled>
                </Wrapper>
            </ItemStyled>
            {quizzes?.map((quiz, idx) => (
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

const ItemStyled = styled.li`
    width: 292px;
    height: 364px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;

    background: rgb(32, 91, 241);
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    align-items: center;
`
const PlusWrapper = styled.div`
    width: 48px;
    height: 48px;
    text-align: center;
    align-content: center;
    box-sizing: border-box;
    border: 1px solid rgba(244, 244, 244, 0.6);
    border-radius: 30px;
    font-size: 24px;
    color: rgba(244, 244, 244);
    cursor: pointer;
`
const TextStyled = styled.p`
    color: rgb(244, 244, 244);
    font-family: Adamina;
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0%;
    text-align: left;
`
