import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigator from "./navigation/Navigator";
import Toast from "react-native-toast-message";
import { GlobalContext } from "./context/GlobalContext";

export default function App() {
  console.log("Init");
  return (
    <>

        <SafeAreaProvider>
          <Navigator />
        </SafeAreaProvider>
        <Toast />
    </>
  );
}
