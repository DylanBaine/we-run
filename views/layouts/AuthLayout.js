import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Paragraph, Colors } from "react-native-paper";
import { useLocation } from "react-router-native";

const style = StyleSheet.create({
  image: {
    zIndex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
  },
  image_overlay: {
    zIndex: 2,
    top: -10,
    left: 0,
    right: 0,
    bottom: -10,
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, .5)",
  },
  view: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  login_form: {
    position: "absolute",
    zIndex: 3,
    width: "90%",
    shadowColor: Colors.grey900,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.2,
  },
  form_input: {
    width: "100%",
  },
  container: {
    zIndex: 4,
    position: "relative",
    width: "90%",
  },
});

const content = {
  appTitle: "Runner App",
  bgImage:
    "https://images.pexels.com/photos/2982100/pexels-photo-2982100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
};

function AuthLayout(props) {
  const location = useLocation();
  // console.log(location);
  return (
    <View style={style.view}>
      <Image
        style={style.image}
        source={{
          uri: content.bgImage,
        }}
      />
      <Paragraph style={style.image_overlay}></Paragraph>
      <View style={style.container}>{props.children}</View>
    </View>
  );
}

export default AuthLayout;
