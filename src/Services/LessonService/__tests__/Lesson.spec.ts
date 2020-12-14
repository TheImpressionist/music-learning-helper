import { Lesson } from "../Lesson";

describe("Lesson", () => {
  it("Get the first step from getNextStep method with the arguments given to the constructor", () => {
    const steps = [1, 2, 3, 4];
    const lesson = new Lesson(steps);
    const result = lesson.getNextStep();

    expect(result).toBe(1);
  });

  it("Should return false when calling isLastStep with a step length > 1", () => {
    const steps = [1, 2, 3, 4];
    const lesson = new Lesson(steps);
    const result = lesson.getNextStep();
    const isLastStep = lesson.isLastStep();

    expect(result).toBe(1);
    expect(isLastStep).toBeFalsy();
  });

  it("Should be able to itterate through all steps and return true when calling isLastStep at the end", () => {
    const steps = [1, 2, 3];
    const lesson = new Lesson(steps);

    expect(lesson.getNextStep()).toBe(1);
    expect(lesson.isLastStep()).toBeFalsy();
    expect(lesson.getNextStep()).toBe(2);
    expect(lesson.isLastStep()).toBeFalsy();
    expect(lesson.getNextStep()).toBe(3);
    expect(lesson.isLastStep()).toBeFalsy();
    expect(lesson.getNextStep()).toBe(undefined);
  });
});
