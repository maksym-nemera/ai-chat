import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MessegeAndAnswers } from '../../types/AnswerAndMessage';

interface ChatState {
  messages: MessegeAndAnswers[];
  answers: MessegeAndAnswers[];
  loading: boolean;
  error: string;
}

const initialState: ChatState = {
  messages: [],
  answers: [],
  loading: false,
  error: '',
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    addMessage: (state, action: PayloadAction<MessegeAndAnswers>) => {
      state.messages.push(action.payload);
    },
    setAnswers: (state, action: PayloadAction<MessegeAndAnswers[]>) => {
      state.answers = action.payload;
    },
    setMessages: (state, action: PayloadAction<MessegeAndAnswers[]>) => {
      state.messages = action.payload;
    },
  },
});

export const { actions } = chatSlice;
export default chatSlice.reducer;
