import { View, Text, TextInput } from "react-native";
import React from "react";

// styles
import useStyles from "../utils/DefaultStyles";

const Filters = () => {
  const styles = useStyles();

  return (
    <TextInput
      style={styles.filters}
      placeholder="Filtrer par tag"
      placeholderTextColor="#909090"
    />
  );
};

export default Filters;
