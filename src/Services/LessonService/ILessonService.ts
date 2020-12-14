export interface ILessonService {
  getLesson(name: string): any; // TODO: Add Lesson type
  listLessons(): IterableIterator<any>;
  listLessonNames(): IterableIterator<string>;
}
