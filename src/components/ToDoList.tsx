import styled from "@emotion/styled";
import ToDoAddForm from "@/src/components/ToDoAddForm";
import ToDoItemList from "@/src/components/ToDoItemList";
import ToDoFilterDropdown from "@/src/components/ToDoFilterDropdown";
import useTodo from "@/src/hooks/useTodo";

export default function ToDoList() {
  const { todoList, addTodo, toggleTodoCompletion, setFilter, isLoading } =
    useTodo();

  return (
    <>
      <S.Title>To Do List</S.Title>
      <ToDoAddForm addTodo={addTodo} />
      <ToDoItemList
        isLoading={isLoading}
        todoList={todoList}
        toggleTodoCompletion={toggleTodoCompletion}
      />
      <ToDoFilterDropdown setFilter={setFilter} />
    </>
  );
}

const S = {
  Title: styled.h2`
    margin-bottom: 2rem;
    ${({ theme }) => theme.typography.title};
  `,
};
