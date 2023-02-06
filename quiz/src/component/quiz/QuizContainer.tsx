import type { NextPage } from "next";
import { useState } from "react";
import { Paper, Container, Button } from "@mui/material";
import { useSelector, useDispatch } from "../../store/store";
import QuizRadioButton from "./QuizRadioButton";
import { setIsClick } from "../../store/slices/quizSlice";

interface customResponse {
  id: string;
  question: string;
  answers: string[];
  correctAnswer: string;
}

const QuizContainer: NextPage = ({ datas }) => {
  const dispatch = useDispatch();
  const [isSubmit, setIsSubmit] = useState(false);
  const { correctAnswerNumber } = useSelector((state) => state.quiz);

  return (
    <Container className="bg-slate-400 m-4 p-4 rounded-md">
      {isSubmit ? (
        <>
          <div className="flex justify-center mb-4">
            <Button
              variant="contained"
              className="bg-blue-500"
              onClick={() => {
                dispatch(setIsClick());
              }}
            >
              Play Again
            </Button>
          </div>
          <Paper className="p-2 bg-gray-200 text-slate-900" elevation={20}>
            Congratulations your correct answer is {correctAnswerNumber}
          </Paper>
        </>
      ) : (
        <>
          <Paper className="p-2 bg-gray-200 text-slate-900" elevation={20}>
            {datas.map((data: customResponse) => {
              return (
                <div key={data.id}>
                  <h3 className="font-semibold text-lg p-1">{data.question}</h3>

                  <QuizRadioButton
                    answers={data.answers}
                    correctAnswer={data.correctAnswer}
                  />
                </div>
              );
            })}
            <Button
              fullWidth
              variant="contained"
              className="bg-blue-600 mt-6 hover:bg-slate-800"
              onClick={() => {
                setIsSubmit(!isSubmit);
              }}
            >
              Submit
            </Button>
          </Paper>
        </>
      )}
    </Container>
  );
};

export default QuizContainer;
