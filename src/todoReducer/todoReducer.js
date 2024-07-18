export const initialTodo = [
  { id: 1, text: "task 1", isDone: false },
  { id: 2, text: "task 2", isDone: false },
  { id: 3, text: "task 3", isDone: true },
  { id: 4, text: "task 4", isDone: false },
];
export function todoReducer(state, action) {
  switch (action.type) {
    case "DELETE-TODO":
      return state.filter((todo) => todo.id !== action.payload.id);

    default:
      break;
  }
}
