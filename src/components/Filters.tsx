import { TextInput } from "react-native";
import React, { useContext, useState } from "react";

// styles
import useStyles from "../utils/DefaultStyles";
import { NoteContext } from "utils/context";
import { INote } from "utils/interfaces/note";
import { getAllNotes } from "services/noteApi";

const Filters = () => {
  const styles = useStyles();
  const [tag, setTag] = useState("");

  const { allNotes, setAllNotes, setReloadNote, reloadNote } =
    useContext(NoteContext);

  const handleChange = async (_tag: string) => {
    setTag(_tag);
    if (_tag !== "") {
      const newList = allNotes.filter((note: Partial<INote>) =>
        note?.tags?.map((tag: string) => tag === _tag)
      );
      // console.log("newList:", newList);
      setAllNotes(newList);
    }
    setReloadNote(!reloadNote);
  };

  return (
    <TextInput
      value={tag}
      style={styles.filters}
      placeholder="Filtrer par tag"
      placeholderTextColor="#909090"
      onChangeText={(tag: string) => handleChange(tag)}
    />
  );
};

export default Filters;
