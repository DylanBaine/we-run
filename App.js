import * as React from "react";
import { View, Text } from "react-native";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { NativeRouter, Route, Link } from "react-router-native";
import Welcome from "./views/Welcome";
import Dashboard, { DashboardRoute } from "./views/Dashboard";

const theme = {
  ...DefaultTheme,
  dark: true,
  roundness: 6,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3498db",
    accent: "#f1c40f",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NativeRouter>
        <View>
          <Route exact path="/" component={Welcome} />
          <Route exact path={DashboardRoute} component={Dashboard} />
        </View>
      </NativeRouter>
    </PaperProvider>
  );
}
