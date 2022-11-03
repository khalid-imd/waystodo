import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//screens
import Index from "./screens/index.js";
import ListTodo from "./screens/listTodo.js";
import { Ionicons } from "@expo/vector-icons";
import addList from "./screens/addList.js";
import addCategories from "./screens/addCategories.js";
import Login from "./screens/login.js";
import register from "./screens/register.js";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerMode: "screen",
        headerTintColor: "indigo",
        headerStyle: { backgroundColor: "pink" },
        tabBarLabel: () => {
          return null;
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Addlist") {
            iconName = focused ? "document-text" : "document-text-outline";
          } else if (route.name === "Listtodo") {
            iconName = focused ? "list-circle" : "list-circle-outline";
          } else if (route.name === "Addcategory") {
            iconName = focused ? "grid" : "grid-outline";
          }

          return <Ionicons name={iconName} size={20} color="orange" />;
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "blue",
      })}
    >
      <Tab.Screen
        name="Listtodo"
        component={ListTodo}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Addlist"
        component={addList}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Addcategory"
        component={addCategories}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default Container = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="index"
          component={Index}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="register"
          component={register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="my app"
          component={MyTab}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
