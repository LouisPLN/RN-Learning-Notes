import { TouchableOpacity, Text } from "react-native";
import React from "react";

// style
import useStyles from "../utils/DefaultStyles";

const Button = ({
  children,
  onPress,
}: {
  children: React.ReactNode;
  onPress: () => void;
}) => {
  const styles = useStyles();

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.textButton}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
