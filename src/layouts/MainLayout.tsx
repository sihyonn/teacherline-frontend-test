"use client";

import { ReactNode } from "react";
import styled from "@emotion/styled";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <S.Container>
      <S.MainBox>{children}</S.MainBox>
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

  MainBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 35rem;
    padding: 2.5rem 1.5rem;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.color.white};
  `,
};
