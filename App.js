//import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SplashScreen from "./components/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { AppProvider, ContextApp } from "./context/ContextApp";
import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("db.testDb");

export default function App() {
  useEffect(() => {
    checkDataBase();
  }, []);

  const checkDataBase = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS Banks (id INTEGER PRIMARY KEY AUTOINCREMENT, bankName TEXT, description TEXT, age INT, url TEXT )"
      );
    });
  };
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <AppProvider>
          <ContextApp.Consumer>
            {({ tags }) => <SplashScreen></SplashScreen>}
          </ContextApp.Consumer>
        </AppProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
