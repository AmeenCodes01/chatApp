import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, {useEffect} from "react";
import {api} from "@/convex/_generated/api";
import {useQuery} from "convex/react";
import {Link} from "expo-router";

const Page = () => {
  const groups = useQuery(api.groups.get) || [];
  console.log(groups, "groups");

  // useEffect(() => {}, []);

  return (
    <View className="flex p-4  ">
      <ScrollView className="flex gap-4   ">
        {groups?.map((group) => (
          <Link
            key={group._id}
            className=" my-4 py-2 flex rounded-md  pl-4 border-[1px] items-center  justify-center   "
            href={{pathname: `/(chat)/[chatid]`, params: {chatid: group._id}}}>
            <TouchableOpacity
              //className=" w-full  border-2  text-purple-700"
              style={style.groupBar}>
              {/* <Image/> */}
              <Text className="text-center self-center">{group.name}</Text>
            </TouchableOpacity>
          </Link>
        ))}
      </ScrollView>
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
