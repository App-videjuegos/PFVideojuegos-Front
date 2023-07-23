
import { useNavigation } from "@react-navigation/native";
import { Login } from "./Login";
import { StartedSession } from "./SessionInit";
import { View, StyleSheet } from "react-native";

export const RenderLogin = ({ navigation }) => {

    console.log("nav",navigation)
  return (
    <View>
      <Login/>
      <StartedSession />
    </View>
  );
};

const styles = StyleSheet.create({

});
