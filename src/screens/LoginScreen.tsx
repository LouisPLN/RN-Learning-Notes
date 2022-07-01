import { View, Text, SafeAreaView, ScrollView, TextInput } from "react-native";
import React, { useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// components
import useStyles from "../utils/DefaultStyles";
import Button from "../components/Button";
import { LoginContext } from "../utils/context";

const LoginScreen = () => {
  const styles = useStyles();
  const { userName, setUserName, setHideLoginScreen } =
    useContext(LoginContext);

  const handlePress = async () => {
    const value = JSON.stringify(userName);
    await AsyncStorage.setItem("@UserInfo", value);
    setHideLoginScreen(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.parent}>
        <Text style={styles.title}>🚀 Identifiez vous</Text>
      </View>
      <ScrollView
        style={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
      >
        <Text style={styles.textLogin}>
          Bienvenue sur l'application{" "}
          <Text style={{ textDecorationLine: "underline", fontWeight: "bold" }}>
            Notes.
          </Text>{" "}
          Vous pourrez partager vos notes avec vos amis, le monde entier tout en
          restant Anonyme.
        </Text>
        <View style={styles.hr}></View>
        <Text style={styles.label}>Pseudonyme</Text>
        <TextInput
          style={styles.inputLogin}
          placeholder="Saisissez un pseudonyme"
          placeholderTextColor="#909090"
          onChangeText={(text: string) => setUserName(text)}
        />
        <Button onPress={handlePress}>Continuer</Button>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
