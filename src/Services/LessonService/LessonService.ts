import { ILesson } from "./ILesson";
import { ILessonService } from "./ILessonService";
import { LessonNotFoundError } from "./LessonNotFoundError";

export class LessonService implements ILessonService {
  private lessonMap = new Map<string, ILesson>();

  constructor(lessons: Array<ILesson>) {
    this.prepareLessons(lessons);
  }

  public getLesson(name: string): ILesson {
    if (!this.lessonMap?.has(name)) {
      throw new LessonNotFoundError(name);
    }

    return this.lessonMap.get(name) as ILesson;
  }

  public listLessons(): IterableIterator<ILesson> {
    return this.lessonMap.values();
  }

  public listLessonNames(): IterableIterator<string> {
    return this.lessonMap.keys();
  }

  private prepareLessons(lessons: Array<ILesson>): void {
    for (const lesson of lessons) {
      this.lessonMap.set(lesson.constructor.name, lesson);
    }
  }
}
