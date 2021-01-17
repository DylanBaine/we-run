import React, { createContext, useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import {
  NativeRouter,
  Route,
  Link,
  Redirect,
  useLocation,
} from "react-router-native";
import ResetPassword from "./views/Auth/ResetPassword";
import Login from "./views/Auth/Login";
import Register from "./views/Auth/Register";
import Dashboard from "./views/Dashboard";
import Welcome from "./views/Welcome";
import * as routes from "./routes";

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

function App() {
  return (
    <PaperProvider theme={theme}>
      <NativeRouter>
        <View>
          <Route path={routes.welcome} component={Welcome} />
          <Route path={routes.register} component={Register} />
          <Route path={routes.login} component={Login} />
          <Route path={routes.resetPassword} component={ResetPassword} />
          <Route path={routes.dashboard} component={Dashboard} />
        </View>
      </NativeRouter>
    </PaperProvider>
  );
}

export default App;
