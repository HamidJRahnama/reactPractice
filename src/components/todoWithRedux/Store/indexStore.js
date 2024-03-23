import { configureStore } from "@reduxjs/toolkit";

import todoSlice from "../Slices/todoSlice";

export const indexStore = configureStore({
  reducer: {
    todoSlice,
  },
});
