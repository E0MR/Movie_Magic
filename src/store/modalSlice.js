import { createSlice, nanoid } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modals",
  initialState: [],
  reducers: {
    addModal: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({
        type,
        title = "",
        message,
        duration = 10000,
        payload,
        disableAutoClose = false,
        actionType = null,
      }) {
        return {
          payload: {
            id: nanoid(),
            type,
            title,
            message,
            duration,
            payload,
            disableAutoClose,
            actionType,
          },
        };
      },
    },
    removeModal(state, action) {
      return state.filter((modal) => modal.id !== action.payload);
    },
  },
});

export const { addModal, removeModal } = modalSlice.actions;
export default modalSlice.reducer;
