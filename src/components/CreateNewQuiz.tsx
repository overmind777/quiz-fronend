import styled from "styled-components"


const CreateNewQuiz = () => {
  return (
    <ItemStyled>
      <div>
        <div>
          +
        </div>
        <p>Create quiz</p>
      </div>
    </ItemStyled>
  )
}

export default CreateNewQuiz

const ItemStyled = styled.li`
    width: 292px;
    height: 364px;
    border-radius: 20px;

    background: rgb(32, 91, 241);
`