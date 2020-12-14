import shuffle from "lodash.shuffle";
import { Lesson } from "../../Services/LessonService/Lesson";
import { INoteMemorizationLessonConfig } from "./INoteMemorizationLessonConfig";
import { notes, sharpSymbol, flatSymbol } from "../../Utils/notes";

export class NoteMemorizationLesson extends Lesson<string> {
  public static defaultConfig: INoteMemorizationLessonConfig = {
    natural: true,
    sharps: true,
    flats: true,
  };

  constructor(
    private config: INoteMemorizationLessonConfig = NoteMemorizationLesson.defaultConfig
  ) {
    super([]);
    this.buildLessonStepsFromConfig();
    this.makeLessonItterator();
  }

  private buildLessonStepsFromConfig(): void {
    const natural = this.config.natural ? notes.map(({ note }) => note) : [];
    const sharps = this.config.sharps
      ? notes
          .filter(({ hasSharp }) => hasSharp)
          .map(({ note }) => `${sharpSymbol.toString()}${note}`)
      : [];
    const flats = this.config.sharps
      ? notes
          .filter(({ hasFlat }) => hasFlat)
          .map(({ note }) => `${flatSymbol.toString()}${note}`)
      : [];

    this.steps = shuffle([...natural, ...sharps, ...flats]);
  }
}
