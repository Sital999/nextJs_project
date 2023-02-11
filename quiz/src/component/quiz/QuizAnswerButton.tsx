import { useDispatch } from "../../store/store";
import { setCorrectAnswerNumber } from "../../store/slices/quizSlice";
interface IQuizRadioButtonProps{
  answers:Array<string>;
  correctAnswer:string
}

const QuizAnswerButton = ({ answers, correctAnswer }:IQuizRadioButtonProps) => {

  const dispatch = useDispatch();

  const handleClick = (answer:string,index:number) => {
    const button = document.getElementById(`Quizbutton${index}`);
    button?.classList.add("focus:bg-blue-900");
  
    if(answer==correctAnswer){
      dispatch(setCorrectAnswerNumber())
    }

  };


  return (
    <>
      {answers &&
        answers.map((answer: string, index: number) => {
          return (
            <div key={index}>
              <button
              id={`Quizbutton${index}`}
                className="h-12 w-96 rounded-lg  bg-slate-800 shadow-2xl shadow-slate-900  text-gray-300 text-lg hover:bg-sky-800"
                onClick={(e) => {
                  handleClick(answer,index);
                }}
                value={answer}
              >
                {answer}
              </button>
            </div>
          );
        })}
    </>
  );
};

export default QuizAnswerButton;
