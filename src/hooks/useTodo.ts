import { useEffect, useState } from "react";
import { FilterOption, Todo } from "@/src/types/todo";
import {
  getStoredTodoFromLocalStorage,
  saveTodoToLocalStorage,
} from "@/src/utils/storage";
import { FILTER_OPTION } from "@/src/constants/FILTER_OPTION";

export default function useTodo() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<FilterOption>(FILTER_OPTION.ALL);

  useEffect(() => {
    const storedTodos = getStoredTodoFromLocalStorage();
    setTodoList(storedTodos);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (todoList.length > 0) saveTodoToLocalStorage(todoList);
  }, [todoList]);

  const addTodo = (inputText: string) => {
    const newTodo = {
      id: `${Date.now()}`,
      text: inputText,
      isDone: false,
    };
    setTodoList(prevTodos => [...prevTodos, newTodo]);
  };

  const toggleTodoCompletion = (id: string) => {
    setTodoList(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const filteredTodoList =
    filter === FILTER_OPTION.COMPLETE
      ? todoList.filter(todo => todo.isDone)
      : filter === FILTER_OPTION.INCOMPLETE
      ? todoList.filter(todo => !todo.isDone)
      : todoList;

  return {
    todoList: filteredTodoList,
    addTodo,
    toggleTodoCompletion,
    setFilter,
    isLoading,
  };
}
