import {api} from "@/convex/_generated/api";
import {useMutation} from "convex/react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthForm = () => {
  const login = useMutation(api.user.login);
  const onLogin = async () => {
    try {
      const result = await login({username: "citrus", password: "citrus"});
      console.log("Login result:", result);
      if (result.token) {
        await AsyncStorage.setItem("token", result.token);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <View>
      <TextInput placeholder="username" style={st.input}></TextInput>
      <TextInput placeholder="passwor" style={st.input}></TextInput>
      <TouchableOpacity onPress={onLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>SignUp </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthForm;

const st = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  label: {},
  input: {
    borderWidth: 1,
    marginVertical: 10,
    padding: 5,
  },
});
