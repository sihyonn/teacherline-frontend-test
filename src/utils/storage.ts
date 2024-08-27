import { Todo } from "@/src/types/todo";

export const getStoredTodoFromLocalStorage = (): Todo[] => {
  const storedTodoList = localStorage.getItem("todoList");
  return storedTodoList ? JSON.parse(storedTodoList) : [];
};

export const saveTodoToLocalStorage = (todoList: Todo[]) => {
  localStorage.setItem("todoList", JSON.stringify(todoList));
};
