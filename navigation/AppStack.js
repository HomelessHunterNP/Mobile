import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

// Pages
import Live from "../Screens/Live/LiveScreen";
import MapScreen from "../Screens/Map/MapScreen";
import Profile from "../Screens/Profile/ProfileScreen";

const AppStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Map"
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        activeTintColor: "#00d5a4",
        showLabel: true,
        labelStyle:{
            color:"#000",
        },
      }}
    >
      <Tab.Screen
        name="Live"
        component={Live}
        options={{
          tabBarLabel: "Live",
          tabBarIcon: ({ color, size }) => <Icon type="ionicon" name="videocam-outline" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarLabel: "Map",
          tabBarIcon: ({ color, size }) => <Icon type="ionicon" name="map-outline" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => <Icon type="ionicon" name="person-outline" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
};
export default AppStack;
