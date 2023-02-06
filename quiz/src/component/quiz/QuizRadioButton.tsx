import { NextPage } from "next";
import { Button,FormControl,FormLabel,FormControlLabel,RadioGroup,Radio} from "@mui/material";
import { useSelector, useDispatch } from "../../store/store";
import { setCorrectAnswerNumber } from "../../store/slices/quizSlice";

const QuizRadioButton: NextPage = ({ answers, correctAnswer }) => {

  const dispatch = useDispatch();
  console.log(answers)

  //  check for correct answer and allot marks
  const checkAnswer = (answer: string, correctAnswer: string) => {
    if (answer == correctAnswer) {
      dispatch(setCorrectAnswerNumber());
    }
  };

  return (
    <>
      <div className="btn-Answer space-y-2 mb-4">
        {answers &&
          answers.map((answer: string, index: number) => {
            return (
              <div key={index}>
                
                <FormControl >
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value={answer}
                      control={<Radio />}
                      label={answer}
                    />
                  </RadioGroup>
                </FormControl>
                
              </div>
            );
          })}
      </div>
    </>
  );
};

export default QuizRadioButton;
