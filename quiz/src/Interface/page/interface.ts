// index page
import {IQuizResponses} from "../store/interface"

export interface IcustomQuizResponse {
  id: string;
  question: string;
  correctAnswer: string;
  answers: Array<string>;
}

export interface IQuizData {
  data: IQuizResponses;
  // making other params dynamic fields for customization
  [prop: string]: any;
}