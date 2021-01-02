import * as React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { Link } from "react-router-native";

function Dashboard() {
  return (
    <View style={{ marginTop: 20 }}>
      <Link to="/">
        <Button>
          <Text>Splash screen</Text>
        </Button>
      </Link>
      <Text>Dashboard</Text>
    </View>
  );
}
export default Dashboard;
