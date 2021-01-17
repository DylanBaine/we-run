import React, { useState } from "react";
import { Text } from "react-native";
import { Title, Card, TextInput, Button, Paragraph } from "react-native-paper";
import { Link, Redirect } from "react-router-native";
import { dashboard, register } from "../../routes";
import AuthLayout from "../layouts/AuthLayout";
import { attemptLogin, useUser } from "../../modules/auth";

function Login(props) {
  const user = useUser();

  if (user) {
    return <Redirect to={dashboard.path} />;
  }

  const [email, setEmail] = useState("dylan.baine@yahoo.com");
  const [password, setPassword] = useState("secret123");

  async function submitForm() {
    const response = await attemptLogin(email, password);
    if (response._type === "success") {
      props.history.replace(dashboard.path);
    }
  }

  return (
    <AuthLayout>
      <Card>
        <Card.Title title="Welcome back!" />
        <Card.Content>
          <TextInput
            keyboardType="email-address"
            value={email}
            onChangeText={(value) => setEmail(value)}
            label="Email"
          />
          <TextInput
            secureTextEntry={true}
            value={password}
            onChangeText={(value) => setPassword(value)}
            label="Password"
          />
        </Card.Content>
        <Card.Actions>
          <Button onPress={submitForm} style={{ marginRight: "auto" }}>
            <Text>Log In</Text>
          </Button>
          <Text>No account? </Text>
          <Link to={register.path}>
            <Text style={{ textDecorationLine: "underline" }}>Register</Text>
          </Link>
        </Card.Actions>
      </Card>
    </AuthLayout>
  );
}

export default Login;
