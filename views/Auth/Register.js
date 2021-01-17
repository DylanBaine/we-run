import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Button, Card, Paragraph, Text, TextInput } from "react-native-paper";
import { Link, Redirect } from "react-router-native";
import UserContext from "../../context/UserContext";
import { useUser } from "../../modules/auth";
import { dashboard, login } from "../../routes";
import AuthLayout from "../layouts/AuthLayout";

const style = StyleSheet.create({
  input: {
    width: "100%",
  },
  registerButton: {
    marginRight: "auto",
  },
});

function Register() {
  const user = useUser();

  if (user) {
    return <Redirect to={dashboard} />;
  }

  return (
    <AuthLayout>
      <Card>
        <Card.Title title="Register" />
        <Card.Content>
          <TextInput style={style.input} label="Name" />
          <TextInput
            keyboardType=""
            keyboardType="email-address"
            style={style.input}
            label="Email"
          />
          <TextInput
            keyboardType="phone-pad"
            style={style.input}
            label="Phone Number"
          />
          <TextInput secureTextEntry style={style.input} label="Password" />
        </Card.Content>
        <Card.Actions>
          <Button style={style.registerButton}>Register</Button>
          <Text>Have an account? </Text>
          <Link to={login}>
            <Text style={{ textDecorationLine: "underline" }}>Log In</Text>
          </Link>
        </Card.Actions>
      </Card>
    </AuthLayout>
  );
}

export default Register;
