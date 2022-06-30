import { View, Text, SafeAreaView, ScrollView, TextInput } from "react-native";
import React from "react";

// components
import useStyles from "../utils/DefaultStyles";
import Button from "../components/Button";

const LoginScreen = ({ setHideScreen }: { setHideScreen: any }) => {
  const styles = useStyles();

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
          Pour pouvoir avoir accès à l'application{" "}
          <Text style={{ textDecorationLine: "underline", fontWeight: "bold" }}>
            Notes
          </Text>{" "}
          de votre téléphone vous pouvez écrire un pseudo dans le champs de
          texte ou bien cliquez sur le bouton{" "}
          <Text style={{ textDecorationLine: "underline", fontWeight: "bold" }}>
            Continuer
          </Text>{" "}
          ci-dessous.
        </Text>
        <TextInput
          style={styles.inputLogin}
          placeholder="Saisissez un pseudo"
          placeholderTextColor="#909090"
        />
        <Button onPress={() => setHideScreen(false)}>Continuer</Button>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
