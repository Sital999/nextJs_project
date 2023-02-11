import { useState } from "react";
import { Paper, Container ,Typography} from "@mui/material";
// import { useSelector, useDispatch } from "../../store/store";
import QuizAnswerButton from "./QuizAnswerButton";
import { useRouter } from "next/router";
import {IQuizcontainerProps} from "../../Interface/component/interface"


const QuizContainer = ({ data, questionNumber }: IQuizcontainerProps) => {
  // const dispatch = useDispatch();
  // const { correctAnswerNumber } = useSelector((state) => state.quiz);
  const router = useRouter();

  const handleClick = () => {
    if (questionNumber == 10) {
      router.push("/quiz/result");
    } else {
      router.push(`/quiz/${questionNumber + 1}`);
    }
  };

  return (
    <Container className="bg-cyan-700 p-8 pl-12 pr-12 rounded-2xl mt-12 max-h-max w-7/12 ">
      <div className="flex flex-row flex-wrap space-y-8 mt-8 mb-8 place-content-around">
        <div className="h-10 w-52 p-1 rounded-full bg-sky-900 shadow-lg shadow-zinc-500 z-20 absolute">
          <Typography variant="h6" align="center">
            Question No: {questionNumber}
          </Typography>
        </div>
        <Paper
          className="basis-full p-3 bg-zinc-300 shadow-xl shadow-slate-700 z-10  "
          elevation={24}
        >
          <Typography variant="h4" align="center">
            {data.question}
            {data.correctAnswer}
          </Typography>
        </Paper>
        <QuizAnswerButton
          answers={data.answers}
          correctAnswer={data.correctAnswer}
        />

        <button
          className=" h-10 w-48 rounded-full  bg-cyan-600 shadow-2xl shadow-slate-900 text-slate-100 hover:bg-blue-800"
          onClick={handleClick}
        >
          {questionNumber == 10 ? "Submit" : "Next"}
        </button>
      </div>
    </Container>
  );
};

export default QuizContainer;
