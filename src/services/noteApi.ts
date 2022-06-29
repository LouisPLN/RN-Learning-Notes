import AsyncStorage from "@react-native-async-storage/async-storage";
import { api, handleError } from "@utils/axios";
import { INote } from "@utils/interfaces/note";

/** Get All Notes
 * GET /note
 * @returns {Promise<any>}
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
  // return JSON.parse(storedNotes);

  return AsyncStorage.getItem("@AllNotes").then((data) => {
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
  try {
    const { data } = await api.post("/note", _body);
    return data;
  } catch (error) {
    handleError(error);
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
  try {
    const { data } = await api.put(`/note/${_noteId}`, _body);
    return data;
  } catch (error) {
    handleError(error);
    return null;
  }
};

/** Delete
 * DELETE /note/:noteId
 **/
const DeleteNoteById = async (_noteId: INote["_id"]) => {
  try {
    const { data } = await api.delete(`/note/${_noteId}`);
    return data;
  } catch (error) {
    handleError(error);
    return null;
  }
};

export { getAllNotes, postNote, DeleteNoteById, updateNoteById };

// const getNotes = async () => {
//   const allNotes = await getAllNotes();
//   setNotesList(allNotes);
// };

// const updateNotes = async () => {
//   const note = await updateNoteById("62bc573a3189936352b5acf7", {
//     title: "Updated title",
//   });
// };

// const addNotes = async () => {
//   await postNote({
//     title: "test2",
//     text: "test2",
//     author: "test",
//     anonym: true,
//     tags: [],
//   });
// };
