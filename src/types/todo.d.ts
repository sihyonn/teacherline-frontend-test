import { FILTER_OPTION } from "@/src/constants/FILTER_OPTION";

export interface Todo {
  id: string;
  text: string;
  isDone: boolean;
}

export interface TodoList {
  todoList: Todo[];
}

export type FilterOption = (typeof FILTER_OPTION)[keyof typeof FILTER_OPTION];
