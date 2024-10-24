import {ConvexProvider, ConvexReactClient} from "convex/react";

import {Link, Stack} from "expo-router";
import {TouchableOpacity, Text} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import "../global.css";
//import * as SplashScreen from "expo-splash-screen";

// Prevent the splash screen from auto-hiding before asset loading is complete.
//SplashScreen.preventAutoHideAsync();

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});
export default function RootLayout() {
  return (
    <ConvexProvider client={convex}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#EEA217",
          },
          headerTintColor: "#fff",
        }}>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "My Chats",
            presentation: "modal",
            headerRight: () => (
              <Link href={"/(modal)/create"} asChild>
                <TouchableOpacity>
                  <Ionicons name="add" size={32} color="white" />
                </TouchableOpacity>
              </Link>
            ),
          }}
        />
        <Stack.Screen name="(chat)/[chatid]" options={{headerTitle: "Test"}} />
        <Stack.Screen name="(auth)/authform" options={{headerTitle: "Auth"}} />

        <Stack.Screen
          name="(modal)/create"
          options={{
            headerTitle: "Start a Chat",
            contentStyle: {
              padding: "auto",
            },
            presentation: "modal",
            headerLeft: () => (
              <Link href={"/"} asChild>
                <TouchableOpacity>
                  <Ionicons name="close-outline" size={32} color="white" />
                </TouchableOpacity>
              </Link>
            ),
          }}
        />
      </Stack>
    </ConvexProvider>
  );
}
