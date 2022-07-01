import { createContext } from "react";
import { INote } from "../interfaces/note";

export const NoteContext = createContext(
  {} as {
    allNotes: INote[];
    setAllNotes: (allNotes: INote[]) => void;
    allMyNotes: INote[];
    setAllMyNotes: (allMyNotes: INote[]) => void;
    currentNote: INote;
    setCurrentNote: (currentNote: INote) => void;
    reloadNote: boolean;
    setReloadNote: (reloadNote: boolean) => void;
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
    setUserName: (userName: string) => void;
    hideLoginScreen: boolean;
    setHideLoginScreen: (hideLoginScreen: boolean) => void;
  }
);
