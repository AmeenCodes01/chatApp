import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, {useEffect, useState} from "react";
import {api} from "@/convex/_generated/api";
import {useQuery} from "convex/react";
import {Link, router} from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Page = () => {
  const [token, setToken] = useState<string | null>(null);
  const getToken = async () => {
    const token = await AsyncStorage.getItem("token");

    return token === undefined ? null : token;
  };
  useEffect(() => {
    const fetchToken = async () => {
      const retrievedToken = await getToken();
      setToken(retrievedToken);
    };
    fetchToken();
  }, []);

  const groups = useQuery(api.groups.get, {token}) || [];
  console.log(groups);
  useEffect(() => {
    const getData = async () => {
      try {
        const value = await getToken();
        console.log(value, "value");
        if (value !== null) {
          // value previously stored
        } else {
          router.push("/(auth)/authform");
        }
      } catch (e) {
        // error reading value
        console.log(e);
      }
    };
    getData();
  }, []);

  return (
    <View className="flex p-4  ">
      <ScrollView className="flex gap-4   "></ScrollView>
    </View>
  );
};

export default Page;

const style = StyleSheet.create({
  groupBar: {
    justifyContent: "center",
    display: "flex",
    borderWidth: 1,
    marginTop: 10,
    alignItems: "center",
    alignSelf: "center",
  },
});

// {
//   groups?.map((group) => (
//     <Link
//       key={group._id}
//       className=" my-4 py-2 flex rounded-md  pl-4 border-[1px] items-center  justify-center   "
//       href={{pathname: `/(chat)/[chatid]`, params: {chatid: group._id}}}>
//       <TouchableOpacity
//         //className=" w-full  border-2  text-purple-700"
//         style={style.groupBar}>
//         {/* <Image/> */}
//         <Text className="text-center self-center">{group.name}</Text>
//       </TouchableOpacity>
//     </Link>
//   ));
// }
