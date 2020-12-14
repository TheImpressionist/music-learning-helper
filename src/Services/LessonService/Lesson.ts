import { ILesson } from "./ILesson";

export class Lesson<T> implements ILesson<T> {
  private itterator: Generator<T, void, boolean>;
  private currentStep: IteratorResult<T, void> | null = null;

  constructor(protected steps: Array<T>) {
    this.itterator = this.makeLessonItterator();
  }

  public getNextStep(): T | void {
    this.currentStep = this.itterator.next();

    return this.currentStep.value;
  }

  public isLastStep(): boolean {
    return this.currentStep?.done ?? false;
  }

  protected *makeLessonItterator(): Generator<T, void, boolean> {
    for (const step of this.steps) {
      yield step;
    }
  }
}
