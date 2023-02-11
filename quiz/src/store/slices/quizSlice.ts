import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { QuizState,ErrorMessage } from "../../Interface/store/interface";

const initialState: QuizState = {
  datas: [],
  isLoading: false,
  error: null,
  correctAnswerNumber:0,
  isClick: false
};

export const fetchQuizAPI = createAsyncThunk(
  "quiz/fetchAPI",
  async (__, thunkApi) => {
    const response = await fetch("https://the-trivia-api.com/api/questions/");
    console.log(response);
    if (response.status === 404) {
      
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
    },
    setIsClick:(state)=>{
      state.isClick=!state.isClick;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuizAPI.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(fetchQuizAPI.fulfilled, (state, action) => {
        state.isLoading = false;
        state.datas = action.payload;
      })
      builder.addCase(fetchQuizAPI.rejected, (state, action) => {
        state.isLoading = false;

      })
      
  },
});

export const {setCorrectAnswerNumber,reset,setIsClick}=quizSlice.actions
export default quizSlice.reducer;



// RTK QUERY






