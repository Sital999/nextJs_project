import type { NextPage } from "next";
import { Container, Typography ,Button} from "@mui/material";
import Link from "next/link";
import { useSelector } from "../../store/store";



const QuizPage: NextPage = () => {
const {correctAnswerNumber}=useSelector((state)=>state.quiz)

  return (
    <>
      <Container className="bg-cyan-700 p-8 pl-12 pr-12 rounded-2xl mt-12 max-h-max w-7/12 ">
        {correctAnswerNumber > 5 ? (
          <Typography variant="h4" align="center">
            Congratulation Your correct answer is : {correctAnswerNumber}.{" "}
            <br></br>
            You can improve it again.
          </Typography>
        ) : (
          <Typography variant="h4" align="center">
            Your Correct Answer is : {correctAnswerNumber} . <br/>
            Don't worry about this number We know you can do better.
          </Typography>
        )}
        <Link href="/quiz">
          <Button variant="contained" className="bg-slate-800 ml-72 mt-10">
            Play Again
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default QuizPage;
