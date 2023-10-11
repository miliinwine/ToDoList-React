import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTask: (state, action) => {
      const todo = {
        id: Date.now(),
        text: action.payload.text,
        completed: false,
      };
      state.todos.push(todo)
    },
    deleteAll(state) {
      state.todos = [];
    },
    deleteTask(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
    },
    toggleComplete(state, action){
			const index = state.todos.find((todo) => todo.id === action.payload.id);
      index.completed = !index.completed;
    },
    deleteChecked(state){
    state.todos = state.todos.filter((todo) => todo.completed !== true);
    },
  },
});
export const { addTask, deleteAll, deleteTask, toggleComplete, deleteChecked } = todoSlice.actions;
export default todoSlice.reducer;
