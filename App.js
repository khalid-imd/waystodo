import React from "react";
import {
  Text,
  //Link,
  HStack,
  //Center,
  //Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  //VStack,
  //Box,
} from "native-base";
//import NativeBaseIcon from "./components/NativeBaseIcon";
//import { Platform } from "react-native";
import Index from "./screens/index";
import Register from "./screens/register";
import AddList from "./screens/addList";
import AddCategories from "./screens/addCategories";
import ListTodo from "./screens/listTodo";
import Login from "./screens/login";
import DetailList from "./screens/detailList";
// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider>
      {/* <ListTodo /> */}
      {/* <Login /> */}
      <DetailList />
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
