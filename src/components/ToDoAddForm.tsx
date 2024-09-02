import Image from "next/image";
import styled from "@emotion/styled";
import useInput from "@/src/hooks/common/useInput";

interface TodoInputProps {
  addTodo: (text: string) => void;
}

export default function ToDoAddForm({ addTodo }: TodoInputProps) {
  const { inputText, isInputValid, resetValue, handleChangeInputText } =
    useInput("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!isInputValid) return;

    e.preventDefault();
    addTodo(inputText);
    resetValue();
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Input
        type="text"
        value={inputText}
        placeholder="some words"
        onChange={handleChangeInputText}
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
