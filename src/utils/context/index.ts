import { createContext } from "react";
import { INote } from "utils/interfaces/note";

export const NoteContext = createContext(
  {} as {
    allNotes: INote[];
    setNotes: (allNotes: INote[]) => void;
    allMyNotes: INote[];
    setMyNotes: (allMyNotes: INote[]) => void;
  }
);

export const TagContext = createContext(
  {} as {
    allTags: string[];
    setAllTags: (allTags: string[]) => void;
  }
);

export const LoginContext = createContext(
  {} as {
    userName: string;
    setUserName: (userName: boolean) => void;
  }
);
