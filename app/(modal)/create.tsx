import {api} from "@/convex/_generated/api";
import {useMutation} from "convex/react";
import {useRouter} from "expo-router";
import {useState} from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
const create = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [icon, setIcon] = useState("");
  const router = useRouter();
  const startGroup = useMutation(api.groups.create);

  const onCreateGroup = async () => {
    await startGroup({name, description: desc, icon_url: icon});
    router.back();
  };
  return (
    <KeyboardAvoidingView style={st.cont}>
      <Text>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={st.input}></TextInput>
      <Text>desc</Text>
      <TextInput
        value={desc}
        onChangeText={setDesc}
        style={st.input}></TextInput>
      <Text>icon</Text>
      <TextInput
        value={icon}
        onChangeText={setIcon}
        style={st.input}></TextInput>
      <TouchableOpacity onPress={onCreateGroup}>
        <Text>Create</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default create;

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
