import styled from "@emotion/styled";

import ToDoItem from "@/src/components/ToDoItem";

import useTodo from "@/src/hooks/useTodo";
import ToDoAddForm from "@/src/components/ToDoAddForm";
import ToDoFilterDropdown from "@/src/components/ToDoFilterDropDown";

export default function ToDoList() {
  const { todoList, addTodo, toggleTodoCompletion, setFilter } = useTodo();
  const isTodoEmpty = todoList.length === 0;

  return (
    <>
      <S.Title>To Do List</S.Title>
      <ToDoAddForm addTodo={addTodo} />
      <S.ToDoItemList>
        {isTodoEmpty ? (
          <S.EmptyList>할일을 생성해보세요✨</S.EmptyList>
        ) : (
          <>
            {todoList.map(todo => (
              <ToDoItem
                key={todo.id}
                todo={todo}
                toggleCompletion={toggleTodoCompletion}
              />
            ))}
          </>
        )}
      </S.ToDoItemList>
      <ToDoFilterDropdown setFilter={setFilter} />
    </>
  );
}

const S = {
  Title: styled.h2`
    margin-bottom: 2rem;
    ${({ theme }) => theme.typography.title};
  `,

  EmptyList: styled.div`
    padding-top: 50%;
    font-weight: 500;
    text-align: center;
  `,

  ToDoItemList: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    width: 100%;
    height: 50rem;
    overflow-y: auto;
    padding: 1.5rem 1.2rem 0;
    margin-top: 1.5rem;
    border-top: 2px solid #dddddd;
  `,
};
