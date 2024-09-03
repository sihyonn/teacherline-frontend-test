import styled from "@emotion/styled";
import ToDoItem from "@/src/components/ToDoItem";
import { Todo } from "@/src/types/todo";

interface ToDoItemListProps {
  isLoading: boolean;
  todoList: Todo[];
  toggleTodoCompletion: (id: string) => void;
}

export default function ToDoItemList({
  isLoading,
  todoList,
  toggleTodoCompletion,
}: ToDoItemListProps) {
  if (isLoading) {
    return <S.ToDoItemList>로딩중...</S.ToDoItemList>;
  }

  if (todoList.length === 0)
    return (
      <S.ToDoItemList>
        <S.EmptyList>할일을 생성해보세요✨</S.EmptyList>
      </S.ToDoItemList>
    );

  return (
    <S.ToDoItemList>
      {todoList.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          toggleCompletion={toggleTodoCompletion}
        />
      ))}
    </S.ToDoItemList>
  );
}

const S = {
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
