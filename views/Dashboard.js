import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { Redirect } from "react-router-native";
import Config from "../config";
import { useUser } from "../modules/auth";
import { useRaces } from "../modules/races";
import { login } from "../routes";
import CreateRace from "./Races/CreateRace";
import Modal from "../components/Modal";

const styles = StyleSheet.create({
  header: {
    fontWeight: "bold",
    fontSize: 24,
  },
  header__small: {
    fontWeight: "bold",
    fontSize: 20,
  },
  container: { marginTop: 20, padding: 24 },
});

function Dashboard() {
  const user = useUser();
  const [addingRace, setAddingRace] = useState(false);
  const [races, loadingRaces] = useRaces(user);

  return (
    <>
      <Modal visible={addingRace} onDismiss={() => setAddingRace(false)}>
        <CreateRace />
      </Modal>
      <View style={styles.container}>
        <Text style={styles.header}>{user && user.name}</Text>
        <Text style={styles.header__small}>Your Races</Text>
        <Button onTouchEnd={() => setAddingRace(true)}>Create a race</Button>
        {races.map((race) => race.name)}
      </View>
    </>
  );
}

export default Dashboard;
