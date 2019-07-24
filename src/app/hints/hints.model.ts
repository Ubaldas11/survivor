import {FormControl} from '@angular/forms';

export interface IQuestion {
  questionText: string;
  answerId: string;
}

export interface IQuestionField {
  question: IQuestion;
  control: FormControl;
}

export interface IAnswersResult {
  message: string;
  success: boolean;
}
