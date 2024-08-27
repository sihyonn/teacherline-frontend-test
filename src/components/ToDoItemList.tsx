import React from "react";
import styled from "@emotion/styled";
import { TodoList } from "@/src/types/todo";

export default function ToDoItemList({ todoList }: TodoList) {
  return (
    <S.Container>
      {todoList.map(todo => (
        <S.ToDoItem key={todo.id}>
          <input type="checkbox" />
          <span>{todo.text}</span>
        </S.ToDoItem>
      ))}
    </S.Container>
  );
}

const S = {
  Container: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    width: 100%;
    padding: 0 1.2rem;
    margin-top: 1.5rem;
  `,

  ToDoItem: styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1.6rem;
    height: 5.6rem;
    background-color: ${({ theme }) => theme.color.background};
    border-radius: 0.5rem;

    span {
      ${({ theme }) => theme.typography.body};
    }
  `,
};
