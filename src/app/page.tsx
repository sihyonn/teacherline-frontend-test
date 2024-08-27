"use client";

import ToDoList from "@/src/components/ToDoList";
import styled from "@emotion/styled";

export default function Home() {
  return (
    <S.Container>
      <ToDoList />
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    //ToDo 나중에 레이아웃으로 전환
    width: 35rem;
    min-height: 74.8rem;
    margin-top: 2rem;
    margin-left: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5rem 1.5rem;
    border: ${({ theme }) => theme.border};
  `,
};
