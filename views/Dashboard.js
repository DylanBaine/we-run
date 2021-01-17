import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, Colors } from "react-native-paper";
import { useUser } from "../modules/auth";
import getUserRaces, { useRaces } from "../modules/races";
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
  const [races, setRaces] = useState([]);

  useEffect(() => {
    if (user) {
      getRaces();
    }
  }, [user]);

  async function getRaces() {
    setRaces(await getUserRaces(user));
  }

  function raceCreated() {
    getRaces();
    setAddingRace(false);
  }

  return (
    <>
      <Modal visible={addingRace} onDismiss={() => setAddingRace(false)}>
        <CreateRace onRaceCreated={raceCreated} user={user} />
      </Modal>
      <View style={styles.container}>
        <Text style={styles.header}>{user && user.name}</Text>
        <Text style={styles.header__small}>Races you created.</Text>
        {races.map((race) => (
          <Text key={race.id}>{race.name} | edit</Text>
        ))}
        <Button onTouchEnd={() => setAddingRace(true)} mode="contained">
          Create a new race
        </Button>
      </View>
    </>
  );
}

export default Dashboard;
