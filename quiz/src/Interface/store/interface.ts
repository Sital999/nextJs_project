// slice
export interface ErrorMessage {
  message: string;
}

export interface QuizState {
  datas: [];
  isLoading: boolean;
  error: null;
  correctAnswerNumber: number;
  isClick: boolean;
}

// api slice for RTK


export interface IQuizResponse {
  id: string;
  categories: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  question: string;
  tags: string[];
  type: string;
  difficulty: string;
  regions: string[];
  isNiche: boolean;
}

export interface IQuizResponses extends Array<IQuizResponse> {}