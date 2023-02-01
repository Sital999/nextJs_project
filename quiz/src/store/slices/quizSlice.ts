import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface ErrorMessage {
  message: string;
}

interface QuizState {
  data: [];
  isLoading: boolean;
  error: null;
  correctAnswerNumber: number;
}

const initialState: QuizState = {
  data: [],
  isLoading: false,
  error: null,
  correctAnswerNumber:0
};

export const fetchQuizAPi = createAsyncThunk(
  "quiz/fetchAPI",
  async (__, thunkApi) => {
    const response = await fetch("https://the-trivia-api.com/api/questions/");
    if (response.status === 400) {
      // Return the known error for future handling
      return thunkApi.rejectWithValue((await response.json()) as ErrorMessage);
    }
    return await response.json();
  }
);

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setCorrectAnswerNumber:(state)=>{
        state.correctAnswerNumber=state.correctAnswerNumber+1
    },
    reset:(state)=>{
        state.correctAnswerNumber=0
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuizAPi.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(fetchQuizAPi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      
  },
});

export const {setCorrectAnswerNumber,reset}=quizSlice.actions
export default quizSlice.reducer;
