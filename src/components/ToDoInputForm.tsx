import { useState } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { Todo } from "@/src/types/todo";

interface TodoInputProps {
  addTodo: (todo: Todo) => void;
}

export default function ToDoInputForm({ addTodo }: TodoInputProps) {
  const [inputText, setInputText] = useState<string>("");
  const isInputValid = inputText.trim().length > 1;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo = {
      id: `${Date.now()}`,
      text: inputText,
    };

    addTodo(newTodo);
    setInputText("");
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Input
        type="text"
        value={inputText}
        placeholder="some words"
        onChange={e => setInputText(e.target.value)}
      />
      <S.PlusButton type="submit" disabled={!isInputValid}>
        <Image
          src="/icons/add-icon.svg"
          alt="추가 아이콘"
          width={24}
          height={24}
        />
      </S.PlusButton>
    </S.Form>
  );
}

const S = {
  Form: styled.form`
    display: flex;
    align-items: center;
    width: 25rem;
    height: 3.2rem;
    border: 1px solid #b1b1b166;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.color.background};
  `,

  Input: styled.input`
    width: 100%;
    padding: 0 1.05rem;
    background-color: ${({ theme }) => theme.color.background};
    :focus {
      outline: none;
    }
  `,

  PlusButton: styled.button`
    width: 4.5rem;
    height: 100%;
    border-radius: 0px 5px 5px 0px;
    background-color: ${({ theme }) => theme.color.gray};
  `,
};
