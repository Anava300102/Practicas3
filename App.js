import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, Box, VStack, useColorModeValue } from "native-base";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from "./src/screens/HomeScreen";
import NotificationsScreen from "./src/screens/NotificationsScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import OrderScreen from "./src/screens/OrderScreen";
import MenuScreen from "./src/screens/MenuScreen";
import UserScreen from "./src/screens/UserScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import theme from "./theme";
import ToggleDarkMode from "./ToggleDarkMode";
import Profile from './src/screens/Profile';
import ConfigurationScreen from './src/screens/ConfigurationScreen';
import Competences from './src/screens/Competences';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Reports') {
            iconName = 'document-text';
          } else if (route.name === 'Monitor') {
            iconName = 'bar-chart';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          } else if (route.name === 'Config') {
            iconName = 'settings';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'black',
      })}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Notificacion" component={NotificationsScreen} options={{ headerShown: false }} />
      <Tab.Screen name="User" component={UserScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <VStack flex={1} bg={useColorModeValue("light.background.50", "dark.background.900")}>
          <Box safeAreaTop bg={useColorModeValue('light.background.100', 'dark.background.900')}>
            <ToggleDarkMode />
          </Box>
          <Stack.Navigator initialRouteName={isAuthenticated ? "MainTab" : "Login"}>
            <Stack.Screen name="Login" options={{ headerShown: false }}>
              {() => <LoginScreen setIsAuthenticated={setIsAuthenticated} />}
            </Stack.Screen>
            <Stack.Screen name="Register" options={{ headerShown: false }}>
              {() => <RegisterScreen setIsAuthenticated={setIsAuthenticated} />}
            </Stack.Screen>
            <Stack.Screen name="MainTab" component={MainTab} options={{ headerShown: false }} />
          </Stack.Navigator>
        </VStack>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
