import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, text: "read books", isDone: false, isEdit: false },
    { id: 2, text: "gym", isDone: false, isEdit: false },
    { id: 3, text: "study", isDone: false, isEdit: false },
  ],
};
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, { payload }) => {
      state.todos = [
        ...state.todos,

        { id: Date.now(), text: payload.text, isDone: false, isEdit: false },
      ];
    },
    remove: (state, { payload }) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload.id);
    },

    toggleEdit: (state, { payload }) => {
      state.todos.map((todo) => {
        if (todo.id === payload.id) {
          todo.isEdit = !todo.isEdit;
        } else {
          todo.isEdit = false;
        }
      });
    },
    toggleDone: (state, { payload }) => {
      state.todos.find((todo) => {
        if (todo.id === payload.id) {
          todo.isDone = !todo.isDone;
        }
      });
    },

    apllyEdit: (state, { payload }) => {
      state.todos.find((todo) => {
        if (todo.id === payload.id) {
          todo.text = payload.text;
          todo.isEdit = false;
        }
      });
    },
    clear: (state, { payload }) => {
      state.todos = [];
    },
  },
});

export const { add, remove, toggleEdit, toggleDone, apllyEdit, clear } =
  todoSlice.actions;
export default todoSlice.reducer;
