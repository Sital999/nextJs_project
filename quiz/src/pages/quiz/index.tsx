import type { NextPage } from "next";
import { useState } from "react";
import { useSelector, useDispatch } from "../../store/store";
import { Container, Button } from "@mui/material";
import QuizContainer from "../../component/quiz/QuizContainer";
import { useGetAllQuizQuery } from "../../store/slices/quizApiSlice";
import { reset, setIsClick } from "../../store/slices/quizSlice";
import { skipToken } from "@reduxjs/toolkit/dist/query";

const QuizPage: NextPage = () => {
  const dispatch = useDispatch();
  const { isClick } = useSelector((state) => state.quiz);

  const { data: datas, isLoading } = useGetAllQuizQuery();

  const handleClick = () => {
    dispatch(setIsClick());
    dispatch(reset());
  };

  return (
    <>
      <Container className="m-auto mt-20 w-3/5">
        {!isClick ? (
          <>
            <h1 className="text-slate-200 font-bold text-2xl text-center mb-4">
              Wanna Play quiz click below:
            </h1>
            <Button
              className="bg-cyan-700 ml-96 hover:bg-slate-800"
              variant="contained"
              onClick={handleClick}
            >
              Play Quiz
            </Button>
          </>
        ) : (
          <>
            <QuizContainer datas={datas} />
          </>
        )}
      </Container>
    </>
  );
};

export default QuizPage;
