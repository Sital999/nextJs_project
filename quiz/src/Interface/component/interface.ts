import {IcustomQuizResponse} from "../page/interface"

// container
export interface IQuizcontainerProps {
  data: IcustomQuizResponse;
  questionNumber: number;
}

// button

export interface IQuizRadioButtonProps {
  answers: Array<string>;
  correctAnswer: string;
}