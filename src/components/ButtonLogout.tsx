import { TouchableOpacity, Text, ViewStyle } from "react-native";
import React, { useContext } from "react";

// style
import useStyles from "../utils/DefaultStyles";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LoginContext } from "../utils/context";

const ButtonLogout = () => {
  const styles = useStyles();

  const { setHideLoginScreen } = useContext(LoginContext);

  const handlePress = async () => {
    await AsyncStorage.removeItem("@UserInfo");
    setHideLoginScreen(true);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{ position: "absolute", right: 0 }}
    >
      <Feather name="power" size={25} color="white" />
    </TouchableOpacity>
  );
};

export default ButtonLogout;
