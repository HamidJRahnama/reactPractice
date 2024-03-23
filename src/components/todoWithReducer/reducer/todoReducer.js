export const initialReducer = {
  todos: [
    { id: 1, text: "read books", isDone: false, isEdit: true },
    { id: 2, text: "gym", isDone: true, isEdit: false },
    { id: 3, text: "study", isDone: false, isEdit: false },
  ],
};
export function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.text,
            isDone: false,
            isEdit: false,
          },
        ],
      };
      break;
    case "DELETE_TODO":
      return { todos: [...state.todos.filter((q) => q.id !== action.id)] };

    case "EDIT_TODO":
      let toggleEdit = state.todos.map((todo) => {
        if (todo.id === action.id) {
          let newTodo = { ...todo, isEdit: !todo.isEdit };
          return newTodo;
        } else {
          return todo;
        }
      });
      return { todos: [...toggleEdit] };

    // case "UPDATE_TODO":
    //   let UPDATE_TODO = state.todos.map((todo) => {
    //     if (todo.id === action.id) {
    //       let newTodo = { ...todo, isEdit: !todo.isEdit };
    //       return newTodo;
    //     } else {
    //       return todo;
    //     }
    //   });
    //   return { todos: [...UPDATE_TODO] };

    case "TOGGLE_TODO":
      let toggleDone = state.todos.map((todo) => {
        if (todo.id === action.id) {
          let newTodo = { ...todo, isDone: !todo.isDone };
          return newTodo;
        } else {
          return todo;
        }
      });
      return { todos: [...toggleDone] };

    default:
      break;
  }
}
