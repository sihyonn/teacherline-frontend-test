import { useState } from "react";
import { Todo } from "@/src/types/todo";

export default function useTodo() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodo = (inputText: string) => {
    const newTodo = {
      id: `${Date.now()}`,
      text: inputText,
      isDone: false,
    };
    setTodoList(prevTodos => [...prevTodos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodoList(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return { todoList, addTodo, toggleTodo };
}
