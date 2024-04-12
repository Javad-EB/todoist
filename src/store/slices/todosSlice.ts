import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./../store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TodosState } from "../../types/interface";
import { Todo } from "../../types/todo";

const initialState: TodosState = {
  todos: [],
  editTodo: null,
  ValidationsError: {},
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos(state, action: PayloadAction<Todo[]>) {
      state.todos = action.payload;
    },
    setEditTodo(state, action) {
      state.editTodo = { ...state.editTodo, ...action.payload };
    },
    setValidationErrors(state, action) {
      state.ValidationsError = { ...action.payload };
    },
    clearEditTodo(state) {
      state.editTodo = null;
    },
  },
});

export const { setTodos, setEditTodo, setValidationErrors, clearEditTodo } =
  todosSlice.actions;

export const selectEditTodo = (state: RootState) => state.todos.editTodo;

export default todosSlice.reducer;
