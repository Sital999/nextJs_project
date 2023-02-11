import type { NextPage } from "next";
import { useSelector, useDispatch } from "../../store/store";
import { Container, Button } from "@mui/material";
import QuizContainer from "../../component/quiz/QuizContainer";
import {
  useGetAllQuizQuery,
  useLazyGetAllQuizQuery,
} from "../../store/slices/quizApiSlice";
import { reset, setIsClick } from "../../store/slices/quizSlice";
import {IquizResponses} from "../../store/slices/quizApiSlice"
import Link from "next/link";




const QuizPage: NextPage = () => {
  const dispatch = useDispatch();
  const { isClick } = useSelector((state) => state.quiz);

  // const { data: datas, isLoading } = useGetAllQuizQuery();
  const [trigger, result] = useLazyGetAllQuizQuery();

  // const [datas,setDatas]=useState([])


  const handleClick = () => {
    dispatch(setIsClick());
    dispatch(reset());
  };

  return (
    <>
      <Container className="m-auto mt-20 w-3/5">
          <>
            <h1 className="text-slate-200 font-bold text-2xl text-center mb-4">
              Wanna Play quiz click below:
            </h1>
            <Link href="/quiz/1">
              <Button
                className="bg-slate-900 ml-96 hover:bg-slate-800"
                variant="contained"
                // onClick={() => {
                //   trigger().then((datas: IQuizData) => {
                //     setDatas(datas.data);
                //     dispatch(setIsClick());
                //   });
                // }}
              >
                Play Quiz
              </Button>
            </Link>
          </>
      </Container>
    </>
  );
};

export default QuizPage;



