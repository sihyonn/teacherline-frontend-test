import ToDoInputForm from "@/src/components/ToDoInputForm";
import ToDoItemList from "@/src/components/ToDoItemList";
import { Todo } from "@/src/types/todo";
import styled from "@emotion/styled";
import { useState } from "react";

export default function ToDoList() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodo = (newTodo: Todo) => setTodoList([...todoList, newTodo]);

  return (
    <>
      <S.Title>To Do List</S.Title>
      <ToDoInputForm addTodo={addTodo} />
      <ToDoItemList todoList={todoList} />
    </>
  );
}

const S = {
  Title: styled.h2`
    ${({ theme }) => theme.typography.title};
  `,
};
