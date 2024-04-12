import { Todo } from "./todo";

export interface AddTodoFormData {
  content: string;
  description: string;
}

export interface UpdateTodoFormData extends AddTodoFormData {
  id?: string;
}

export interface TodosState {
  todos: Todo[];
  editTodo: Todo | null;
  ValidationsError: Partial<Todo>;
}
