import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LoginScreen from "../view/LoginScreen";
import HomeScreen from "../view/HomeScreen";
import LoadingView from "../components/LoadingView";
import ProfileScreen from "../view/ProfileScreen";
import style from "../context/style";
import RegisterScreen from "../view/RegisterScreen";
import MapScreen from "../view/MapScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  const [onGoing, success] = useState(false);
  return onGoing ? (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        // tabBarActiveBackgroundColor: "#eb2a9e",
        tabBarActiveTintColor: "#e91e63",
        barStyle: {
          backgroundColor: "grey",
        },
        headerStyle: {
          backgroundColor: "grey",
          // position: "center",
          // marginLeft: "40px",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Map View"
        component={MapScreen}
        options={{
          tabBarLabel: "Updates",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  ) : (
    <Stack.Navigator>
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
