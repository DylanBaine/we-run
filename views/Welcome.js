import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import {
  TextInput,
  Card,
  Button,
  Paragraph,
  Title,
  Colors,
} from "react-native-paper";
import { Link } from "react-router-native";

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
    height: "400%",
    top: -10,
    left: 0,
    right: 0,
    bottom: 0,
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

function Welcome() {
  const [registering, setRegistering] = React.useState(true);

  function submitForm(e) {
    console.log(e);
  }
  return (
    <View style={style.view}>
      <Image
        style={style.image}
        source={{
          uri: content.bgImage,
        }}
      />
      <Paragraph style={style.image_overlay}></Paragraph>
      <Title style={style.title}>{content.appTitle}</Title>
      <Card style={style.login_form}>
        <Card.Title
          title={registering ? "Sign up to get started." : "Welcome back!"}
        />
        <Card.Content>
          {registering && <TextInput style={style.form_input} label="Name" />}
          <TextInput
            style={style.form_input}
            keyboardType="email-address"
            label="Email"
          />
          {registering && (
            <TextInput
              keyboardType="phone-pad"
              style={style.form_input}
              label="Phone Number"
            />
          )}
          <TextInput
            style={style.form_input}
            secureTextEntry={true}
            label="Password"
          />
        </Card.Content>
        <Card.Actions>
          <Button onPress={submitForm} style={{ marginRight: "auto" }}>
            {registering ? "Register" : "Log In"}
          </Button>
          <Paragraph>
            {registering ? "Have an account?" : "No account?"}
          </Paragraph>
          {registering ? (
            <Button onPress={() => setRegistering(false)}>Log In</Button>
          ) : (
            <Button onPress={() => setRegistering(true)}>Register</Button>
          )}
        </Card.Actions>
      </Card>
    </View>
  );
}

export default Welcome;
