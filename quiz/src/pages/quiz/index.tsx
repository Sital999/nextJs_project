import type { NextPage } from "next";
import {useState} from "react"
import {useSelector,useDispatch} from "../../store/store"
import { fetchQuizAPi,setCorrectAnswerNumber,reset } from "../../store/slices/quizSlice";
import {Paper,Container,Button} from "@mui/material"

const QuizPage: NextPage = () => {

  const dispatch=useDispatch()
  const {data,isLoading,error,correctAnswerNumber}=useSelector(state=>state.quiz)

  const [isClick,setIsClick]=useState(false)

  const [isSubmit,setIsSubmit]=useState(false)

  // for randomizing answers
  var answers:string[]=[]
  var shuffledAnswer:string[]=[]


  // shuffling answers for randomness
   const shuffle=(array:string[])=> {
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
   }

  //  check for correct answer and allot marks
const checkAnswer = (answer:string,correctAnswer:string)=>{
  if (answer==correctAnswer){
    dispatch(setCorrectAnswerNumber())
  }
}

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
              onClick={() => {
                dispatch(fetchQuizAPi());
                setIsClick(!isClick);
              }}
            >
              Play Quiz
            </Button>
          </>
        ) : (
          <>
            <div className="flex justify-center">
              <Button
                variant="contained"
                className="bg-blue-500"
                onClick={() => {
                  dispatch(fetchQuizAPi());
                  setIsSubmit(false);
                  dispatch(reset());
                }}
              >
                Play Again
              </Button>
            </div>
          </>
        )}
        {isLoading ? (
          <h2>...Loading</h2>
        ) : (
          <>
            {isClick ? (
              <>
                <Container className="bg-slate-400 m-4 p-4 rounded-md">
                  <Paper
                    className="p-2 bg-gray-200 text-slate-900"
                    elevation={20}
                  >
                    {isSubmit ? (
                      <>
                        Congratulations your correct answer is{" "}
                        {correctAnswerNumber}
                      </>
                    ) : (
                      <>
                        {data.map((d) => {
                          answers = [
                            ...d["incorrectAnswers"],
                            d["correctAnswer"],
                          ];

                          // shuffle answer
                          shuffledAnswer = shuffle(answers);

                          return (
                            <div key={d["id"]}>
                              <h3 className="font-semibold text-lg p-1">
                                {d["question"]}
                              </h3>
                              <h2>{d["correctAnswer"]}</h2>
                              <div className="btn-Answer space-y-2 mb-4">
                                <Button
                                  variant="contained"
                                  fullWidth
                                  className="bg-cyan-700  active:bg-slate-800"
                                  value={shuffledAnswer[0]}
                                  onClick={(e) =>
                                    checkAnswer(
                                      (e.target as HTMLInputElement).value,
                                      d["correctAnswer"]
                                    )
                                  }
                                >
                                  {shuffledAnswer[0]}
                                </Button>
                                <Button
                                  variant="contained"
                                  fullWidth
                                  className="bg-cyan-700  active:bg-slate-800"
                                  value={shuffledAnswer[1]}
                                  onClick={(e) =>
                                    checkAnswer(
                                      (e.target as HTMLInputElement).value,
                                      d["correctAnswer"]
                                    )
                                  }
                                >
                                  {shuffledAnswer[1]}
                                </Button>
                                <Button
                                  variant="contained"
                                  fullWidth
                                  className="bg-cyan-700  active:bg-slate-800"
                                  value={shuffledAnswer[2]}
                                  onClick={(e) =>
                                    checkAnswer(
                                      (e.target as HTMLInputElement).value,
                                      d["correctAnswer"]
                                    )
                                  }
                                >
                                  {shuffledAnswer[2]}
                                </Button>

                                <Button
                                  variant="contained"
                                  fullWidth
                                  className="bg-cyan-700  active:bg-slate-800"
                                  value={shuffledAnswer[3]}
                                  onClick={(e) =>
                                    checkAnswer(
                                      (e.target as HTMLInputElement).value,
                                      d["correctAnswer"]
                                    )
                                  }
                                >
                                  {shuffledAnswer[3]}
                                </Button>
                              </div>
                            </div>
                          );
                        })}
                      </>
                    )}
                  </Paper>
                  <Button
                    fullWidth
                    variant="contained"
                    className="bg-blue-600 mt-6 hover:bg-slate-800"
                    onClick={() => setIsSubmit(!isSubmit)}
                  >
                    Submit
                  </Button>
                </Container>
              </>
            ) : (
              <></>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default QuizPage;
