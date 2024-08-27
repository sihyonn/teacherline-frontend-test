import styled from "@emotion/styled";
import ToDoInputForm from "@/src/components/ToDoInputForm";
import ToDoItem from "@/src/components/ToDoItem";
import useTodo from "@/src/hooks/useTodo";

export default function ToDoList() {
  const { todoList, addTodo, toggleTodo } = useTodo();

  return (
    <>
      <S.Title>To Do List</S.Title>
      <ToDoInputForm addTodo={addTodo} />
      <S.ToDoItemList>
        {todoList.map(todo => (
          <ToDoItem key={todo.id} todo={todo} updateTodo={toggleTodo} />
        ))}
      </S.ToDoItemList>
    </>
  );
}

const S = {
  Title: styled.h2`
    ${({ theme }) => theme.typography.title};
  `,

  ToDoItemList: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    width: 100%;
    padding: 0 1.2rem;
    margin-top: 1.5rem;
  `,
};
