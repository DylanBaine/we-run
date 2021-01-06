import * as React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { Link } from "react-router-native";
import { useUser } from "../modules/auth";

function Dashboard() {
  const user = useUser();

  console.log("dashboard", user);
  return (
    <View style={{ marginTop: 20 }}>
      <Link to="/">
        <Button>
          <Text>Splash screen</Text>
        </Button>
      </Link>
      <Text>{user.name}</Text>
    </View>
  );
}

export default Dashboard;

export const DashboardRoute = "/dashboard";
