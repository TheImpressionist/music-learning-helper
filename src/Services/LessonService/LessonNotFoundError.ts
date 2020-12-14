export class LessonNotFoundError extends Error {
  private static buildErrorMessage(lessonName: string): string {
    return `Lesson "${lessonName}" not found`;
  }

  constructor(lessonName: string) {
    super(LessonNotFoundError.buildErrorMessage(lessonName));
    this.name = "LessonNotFoundError";
  }
}
