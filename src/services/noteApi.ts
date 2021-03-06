import { useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api, handleError } from "../utils/axios";
import { INote } from "../utils/interfaces/note";
import { LoginContext } from "../utils/context";

/** Get All Notes
 * GET /note
 * @returns {Promise<INote[]>}
 * {
    "__v": 0,
    "_id": "62bc0cc43189936352b521c5",
    "anonym": true,
    "creation_date": "2022-06-25T20:44:03.538Z",
    "tags": [
      "cours",
      "react-native",
    ],
    "text": "Cours de React Native",
    "title": "test",
  }
 * */
const getAllNotes = async () => {
  try {
    const { data } = await api.get("/note");
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem("@AllNotes", jsonValue);
    return data;
  } catch (error: any) {
    handleError(error);
    return null;
  }
};

const getStoredNotes = () => {
  return AsyncStorage.getItem("@AllNotes").then((data: any) => {
    if (!data) return [];
    return JSON.parse(data);
  });
};

const getMyStoredNotes = () => {
  return AsyncStorage.getItem("@AllMyNotes").then((data: any) => {
    if (!data) return [];
    return JSON.parse(data);
  });
};

const getAllMyNotes = async (_userName: string) => {
  try {
    const { data } = await api.get("/note");
    const result = data.filter(
      (note: Partial<INote>) => note.author === _userName
    );
    const jsonValue = JSON.stringify(result);
    await AsyncStorage.setItem("@AllMyNotes", jsonValue);
    return result;
  } catch (error: any) {
    handleError(error);
    return null;
  }
};

const getAllTags = async () => {
  try {
    const { data } = await api.get("/note");
    const result = data
      .map((note: Partial<INote>) => note.tags)
      .flat()
      .filter(
        (value: string, index: number, self: string[]) =>
          self.indexOf(value) === index
      );
    const jsonValue = JSON.stringify(result);
    await AsyncStorage.setItem("@AllTags", jsonValue);
    return result;
  } catch (error: any) {
    handleError(error);
    return null;
  }
};

const getStoredTags = () => {
  return AsyncStorage.getItem("@AllTags").then((data: string | null) => {
    if (!data) return [];
    return JSON.parse(data);
  });
};

const getMyStoredUserInfo = () => {
  return AsyncStorage.getItem("@UserInfo").then((data: string | null) => {
    if (!data) return [];
    return JSON.parse(data);
  });
};

/** Post Note"
 * POST /note {title,text,tags,anonym}
 * {
  "title": "test",
  "text": "test",
  "author": "test",
  "anonym": true,
  "tags": []
  }
 */
const postNote = async (_body: Partial<INote>) => {
  console.log("_body:", _body);
  try {
    const { data } = await api.post("/note", _body);
    console.log("data:", data);
    return data;
  } catch (error) {
    console.warn(error);
    return null;
  }
};

/** Get Note by Id
 * GET /note/:id
 *
 **/

/** Put
 * PUT /note/:noteId {}
 * {
  "title": "test",
  "text": "test",
  "author": "test",
  "anonym": true,
  "tags": []
    }
 */
const updateNoteById = async (_noteId: INote["_id"], _body: Partial<INote>) => {
  console.log("_noteId:", _noteId);
  console.log("_body:", _body);
  try {
    const { data } = await api.put(`/note/${_noteId}`, _body);
    console.log("data:", data);
    return data;
  } catch (error) {
    handleError(error);
    return null;
  }
};

/** Delete
 * DELETE /note/:noteId
 **/
const deleteNoteById = async (_noteId: INote["_id"]) => {
  try {
    const { data } = await api.delete(`/note/${_noteId}`);
    return data;
  } catch (error) {
    handleError(error);
    return null;
  }
};

export {
  getAllNotes,
  postNote,
  deleteNoteById,
  updateNoteById,
  getAllMyNotes,
  getStoredNotes,
  getMyStoredNotes,
  getStoredTags,
  getAllTags,
  getMyStoredUserInfo,
};
