import {View, Text, TextInput, TouchableOpacity} from "react-native";

const AuthForm = () => {
  return (
    <View>
      <TextInput placeholder="username"></TextInput>
      <TextInput placeholder="passwor"></TextInput>
      <TouchableOpacity>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>SignUp </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthForm;
