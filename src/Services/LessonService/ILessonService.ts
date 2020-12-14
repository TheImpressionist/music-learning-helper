import { ILesson } from "./ILesson";

export interface ILessonService {
  getLesson(name: string): ILesson;
  listLessons(): IterableIterator<ILesson>;
  listLessonNames(): IterableIterator<string>;
}
