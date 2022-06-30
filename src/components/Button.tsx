import { TouchableOpacity, Text } from "react-native";
import React from "react";

// style
import useStyles from "../utils/DefaultStyles";

const Button = ({
  children,
  onPress,
  disabled,
}: {
  children: React.ReactNode;
  onPress: () => void;
  disabled?: boolean;
}) => {
  const styles = useStyles();

  return (
    <TouchableOpacity
      disabled={disabled}
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.textButton}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
