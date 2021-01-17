import React, { useContext, useEffect } from "react";
import { Title, Colors } from "react-native-paper";
import { StyleSheet } from "react-native";
import UserContext from "../context/UserContext";
import AuthLayout from "./layouts/AuthLayout";
import { dashboard, register } from "../routes";
import { Redirect, useLocation } from "react-router-native";
import { useUser } from "../modules/auth";

const style = StyleSheet.create({
  title: {
    position: "absolute",
    zIndex: 3,
    color: Colors.white,
    fontWeight: "800",
    fontSize: 40,
    width: "90%",
  },
});

function Welcome(props) {
  const user = useUser();
  const location = useLocation();
  // console.log(location, user);

  if (user) {
    return <Redirect to={dashboard.path} />;
  } else {
    return <Redirect to={register.path} />;
  }
}

export default Welcome;
