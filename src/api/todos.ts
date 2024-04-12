const URL = import.meta.env.VITE_URL_TODO;
const TOKEN = import.meta.env.VITE_TOKEN;
import { QueryFunction } from "@tanstack/react-query";
import { Todo } from "../types/todo";
import { AddTodoFormData, UpdateTodoFormData } from "../types/interface";

const getTodo: QueryFunction<Todo, ["Todo", string?]> = async ({
  queryKey,
}) => {
  let id = queryKey[1];
  if (!id) {
    id = "";
  }
  const res = await fetch(`${URL}/tasks/${id}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  const data = await res.json();
  return data;
};

const addTodo = async ({
  content,
  description,
}: AddTodoFormData): Promise<Todo> => {
  const res = await fetch(`${URL}/tasks`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content, description }),
  });
  if (!res.ok) {
    throw new Error("Failed to add new todo");
  }
  const data = await res.json();
  return data;
};

const updateTodo = async ({
  id,
  content,
  description,
}: UpdateTodoFormData): Promise<Todo> => {
  const res = await fetch(`${URL}/tasks/${id}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content, description }),
  });
  const data = await res.json();
  return data;
};
async function deleteTodoId(id: string): Promise<Todo> {
  const res = await fetch(`${URL}/tasks/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Failed to delete todo");
  }
  const data = await res.json();
  return data;
}

export { addTodo, getTodo, updateTodo, deleteTodoId };
