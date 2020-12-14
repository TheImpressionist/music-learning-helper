import { ILesson } from "./ILesson";

export class Lesson<T> implements ILesson<T> {
  private itterator: Generator<T, boolean, T>;

  constructor(private lessons: Array<T>) {
    this.itterator = this.makeLessonItterator();
  }

  public getNextStep(): any {}

  public isLastStep(): boolean {
    return this.itterator.done();
  }

  private *makeLessonItterator(): Generator<T, boolean, T> {
    for (const lesson of this.lessons) {
      yield lesson;
    }

    return true;
  }
}
