import { ILesson } from "../ILesson";
import { LessonNotFoundError } from "../LessonNotFoundError";
import { LessonService } from "../LessonService";

class MockLesson {}

describe("LessonService", () => {
  it("Should prepare lesson map with given lessons and be able to retrieve it by name", () => {
    const args = [(new MockLesson() as unknown) as ILesson];
    const service = new LessonService(args);

    expect(service.getLesson("MockLesson")).toBeInstanceOf(MockLesson);
  });

  it("Should throw an error if a lesson does not exist", () => {
    const service = new LessonService([]);

    expect(() => service.getLesson("DoesNotExist")).toThrowError(
      LessonNotFoundError
    );
  });

  it("Should list all available lessons as an array when calling listLessons", () => {
    const args = [(new MockLesson() as unknown) as ILesson];
    const service = new LessonService(args);

    expect(Array.from(service.listLessons())).toEqual(args);
  });

  it("Should list all lesson names when calling listLessonNames", () => {
    const args = [(new MockLesson() as unknown) as ILesson];
    const service = new LessonService(args);
    const expected = ["MockLesson"];

    expect(Array.from(service.listLessonNames())).toEqual(expected);
  });
});
