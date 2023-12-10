import { ChoiceType } from './Choices';

export interface FormState {
  name: string;
  body: string;
  choices: ChoiceType[];
  startDate: Date;
  startTime: Date;
  endDate: Date;
  endTime: Date;
  snapshot: number;
}
