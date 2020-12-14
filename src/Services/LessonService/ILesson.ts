export interface ILesson<T> {
  getNextStep(): T;
  isLastStep(): boolean;
}
