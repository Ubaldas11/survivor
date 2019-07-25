import {Component, OnDestroy, OnInit} from '@angular/core';
import {IAnswersResult, IQuestion, IQuestionField} from './hints.model';
import {FormControl, FormGroup} from '@angular/forms';
import {HintsService} from '../services/hints.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {StatisticsService} from '../services/statistics.service';

@Component({
  selector: 'app-hints',
  templateUrl: './hints.component.html',
  styleUrls: ['./hints.component.scss'],
  providers: [HintsService]
})
export class HintsComponent implements OnInit, OnDestroy {

  public questions: IQuestion[] = [
    {
      questionText: 'Kuriame "Išlikimo" sezone panaudotas pirmas neliečiamybės stabukas?',
      answerId: 'answer1'
    },
    {
      questionText: 'Vienintelis lietuvis, laimėjęs "Robinzonus"?',
      answerId: 'answer2'
    },
    {
      questionText: 'Kiek ąžuolų auga Mančiagirėje netoli upės, didelėje ąžuolų grupėje?',
      answerId: 'answer3'
    },
  ];

  public questionFields: IQuestionField[];
  public form: FormGroup;
  public message = '';
  public success = false;
  public submitted = false;
  private destroy: Subject<void> = new Subject<void>();

  constructor(private hintsService: HintsService) { }

  ngOnInit() {
    this.questionFields = this.questions.map((question: IQuestion) => {
      return  {
        question,
        control: new FormControl('')
      };
    });
    this.form = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    const group: any = {};

    this.questionFields.forEach((field: IQuestionField) => {
      group[field.question.answerId] = field.control;
    });

    return new FormGroup(group);
  }

  onSubmit() {
    this.submitted = false;
    this.hintsService.sendAnswers(this.form.value).pipe(
      takeUntil(this.destroy)
    ).subscribe((resp: IAnswersResult) => {
      this.message = resp.message;
      this.success = resp.success;
      this.submitted = true;
    });
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.unsubscribe();
  }
}
