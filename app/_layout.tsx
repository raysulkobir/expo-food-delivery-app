import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../src/store";
import './globals.css';

export default function RootLayout() {
  return (
    <Provider store={store}>
    <Stack
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen name="home" options={{}} />
    </Stack>
    </Provider>
  );
}
