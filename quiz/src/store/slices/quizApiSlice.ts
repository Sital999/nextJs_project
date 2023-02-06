import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface quizResponse{
  id: string,
  categories: string,
  correctAnswer: string,
  incorrectAnswers: string[],
  question: string,
  tags: string[],
  type:string,
  difficulty:string,
  regions:string[],
  isNiche:boolean
}

interface quizResponses extends Array<quizResponse> {}

export const quizApi = createApi({
  reducerPath: "quizApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://the-trivia-api.com/api/" }),
  tagTypes:['Quiz'],
  endpoints: (builder) => ({
    getAllQuiz: builder.query({
      query: () => "questions",
      transformResponse: (response: quizResponses) => {
        // for randomizing answers
        var answers: string[] = [];
        var shuffledAnswer: string[] = [];
        return response.map((res: quizResponse) => {
          answers = [...res.incorrectAnswers, res.correctAnswer];
          shuffledAnswer = shuffle(answers);
          return {
            id:res.id,
            question: res.question,
            correctAnswer: res.correctAnswer,
            answers: shuffledAnswer,
          };
        });
      },
      transformErrorResponse:(response)=>{
        return {error:"Page not Found",status:response.status}
      },
    }),
  }),
});

export const { useGetAllQuizQuery } = quizApi;


  // shuffling answers for randomness
  const shuffle = (array: string[]) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

