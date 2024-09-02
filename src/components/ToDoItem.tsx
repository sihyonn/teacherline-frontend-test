import styled from "@emotion/styled";

import { Todo } from "@/src/types/todo";

interface ToDoItemProps {
  todo: Todo;
  toggleCompletion: (id: string) => void;
}

export default function ToDoItem({ todo, toggleCompletion }: ToDoItemProps) {
  const handleChangeChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    toggleCompletion(todo.id);
  };

  return (
    <S.ToDoItem>
      <S.Checkbox
        type="checkbox"
        checked={todo.isDone}
        onChange={handleChangeChecked}
      />
      <S.ToDoText>{todo.text}</S.ToDoText>
    </S.ToDoItem>
  );
}

const S = {
  ToDoItem: styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1.6rem;
    height: 5.6rem;
    background-color: ${({ theme }) => theme.color.background};
    border-radius: 0.5rem;

    input:checked + span {
      text-decoration: line-through;
      color: ${({ theme }) => theme.color.gray};
    }
  `,

  Checkbox: styled.input`
    width: 2.4rem;
    height: 2.4rem;
    border: ${({ theme }) => theme.color.border};
    border-radius: 0.5rem;
    cursor: pointer;
  `,

  ToDoText: styled.span`
    ${({ theme }) => theme.typography.body};
  `,
};
