
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LogHours from "./LogHours"; 
import Profile from "./Profile";
import Search from "./Search";
import Home from "./index";  
import Fundraisers from "./Fundraisers";
import Create from "./Create";
import Settings from "./Settings";



const Stack = createStackNavigator();
export default function RootLayout() {
  return  <NavigationContainer>
  <Stack.Navigator initialRouteName="index" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="index" component={Home} /> 
    <Stack.Screen name="LogHours" component={LogHours} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Search" component={Search} />
    <Stack.Screen name="Fundraisers" component={Fundraisers} />
    <Stack.Screen name="Create" component={Create} />
    <Stack.Screen name="Settings" component={Settings} />
  </Stack.Navigator>
</NavigationContainer>
}
