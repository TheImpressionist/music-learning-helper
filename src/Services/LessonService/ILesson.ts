export interface ILesson<T = unknown> {
  getNextStep(): T | void;
  isLastStep(): boolean;
}
