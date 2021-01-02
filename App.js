import * as React from "react";
import { AppRegistry, Text, StyleSheet, View, Image } from "react-native";
import {
  Provider as PaperProvider,
  DefaultTheme,
  TextInput,
  Card,
  Button,
  Paragraph,
  Title,
  Colors,
} from "react-native-paper";

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

const style = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    zIndex: 1,
    position: "relative",
  },
  view: {
    position: "absolute",
    zIndex: 1,
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, .3)",
  },
  login_form: {
    width: "90%",
  },
  form_input: {
    width: "100%",
  },
  title: {
    color: Colors.white,
    position: "absolute",
    top: 40,
    left: 40,
  },
});

const content = {
  appTitle: "Runner App",
  bgImage:
    "https://images.pexels.com/photos/2982100/pexels-photo-2982100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Image
        style={style.image}
        source={{
          uri: content.bgImage,
        }}
      />
      <View style={style.view}>
        <Title style={style.title}>{content.appTitle}</Title>
        <Card style={style.login_form}>
          <Card.Title title="Log in to get started." />
          <Card.Content>
            <TextInput
              style={style.form_input}
              keyboardType="email-address"
              label="Email"
            />
            <TextInput
              style={style.form_input}
              secureTextEntry={true}
              label="Password"
            />
          </Card.Content>
          <Card.Actions>
            <Button style={{ marginRight: "auto" }}>Log In</Button>
            <Paragraph>No account?</Paragraph>
            <Button>Register</Button>
          </Card.Actions>
        </Card>
      </View>
    </PaperProvider>
  );
}
