import type { NextPage } from "next";
import Link from "next/link";
import {useRouter} from "next/router"
import { IquizResponses } from "../../store/slices/quizApiSlice";
import { IquizResponse } from "../../store/slices/quizApiSlice";
import QuizContainer from "../../component/quiz/QuizContainer"
import { shuffle } from "../../store/slices/quizApiSlice";
import {IcustomQuizResponse} from "../../component/quiz/QuizContainer"



const QuestionPage = ({ data }: { data: IcustomQuizResponse }) => {
  const router = useRouter();
  const { questionId } = router.query;

  const nextQuestionId = (parseInt(questionId!.toString()) + 1).toString();
  const questionNumber = parseInt(questionId!.toString());
  return (
    <>
      <QuizContainer data={data} questionNumber={questionNumber} />
    </>
  );
};

export default QuestionPage;

export async function getStaticPaths(){
        const response = await fetch("https://the-trivia-api.com/api/questions");
        const datas= await response.json();

        const paths=datas.map((data:IquizResponse,index:number)=>{
          // console.log(data)
            return{
                params:{
                    questionId: `${index+1}`

                }
            }
        })

    return {
      paths,
      fallback:false
    };

}


export async function getStaticProps(){
    const response = await fetch("https://the-trivia-api.com/api/questions");
    const data= await response.json();
    const { id, correctAnswer, incorrectAnswers, question } = data[0];

    // for shuffling of answer
    var answers: Array<string> = [];
    var shuffledAnswer: Array<string> = [];
    answers = [...incorrectAnswers, correctAnswer];
    shuffledAnswer = shuffle(answers);


    return {
        props:{
            data:{
              id,
              question,
              correctAnswer,
              answers:shuffledAnswer,
            }
        }
    }
}
