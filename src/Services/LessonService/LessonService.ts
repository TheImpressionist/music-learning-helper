import { ILessonService } from "./ILessonService";
import { LessonNotFoundError } from "./LessonNotFoundError";

export class LessonService implements ILessonService {
  private lessonMap = new Map<string, any>();

  constructor(lessons: Array<any>) {
    this.prepareLessons(lessons);
  }

  public getLesson(name: string): any {
    if (!this.lessonMap?.has(name)) {
      throw new LessonNotFoundError(name);
    }

    return this.lessonMap.get(name);
  }

  public listLessons(): IterableIterator<any> {
    return this.lessonMap.values();
  }

  public listLessonNames(): IterableIterator<string> {
    return this.lessonMap.keys();
  }

  private prepareLessons(lessons: Array<any>): void {
    for (const lesson of lessons) {
      this.lessonMap.set(lesson.prototype.constructor.name, lesson);
    }
  }
}
