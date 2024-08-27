"use client";
import styled from "@emotion/styled";
import ToDoList from "@/src/components/ToDoList";

export default function Home() {
  return (
    <S.Container>
      <S.InnerWrap>
        <ToDoList />
      </S.InnerWrap>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    justify-content: center;

    width: 100%;
    height: 100vh;
    padding: 2rem 4.8rem;
    background-color: ${({ theme }) => theme.color.main};
  `,

  InnerWrap: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 35rem;
    min-height: 74.8rem;
    padding: 2.5rem 1.5rem;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.color.white};
  `,
};
