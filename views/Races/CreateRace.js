import React, { useState } from "react";
import { Button, Card, TextInput } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import { createRace, updateRace } from "../../modules/races";

function CreateRace(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [distance, setDistance] = useState({
    number: 5,
    units: "killometers",
  });

  function onDateSelected(event, selectedDate) {
    const newDate = selectedDate || date;
    setDate(newDate);
  }

  async function saveButtonClicked() {
    await createRace(props.user, {
      name: name,
      description: description,
      start_time: date,
      distance_number: distance.number,
      distance_units: distance.units,
    });
    props.onRaceCreated();
  }

  return (
    <Card>
      <Card.Title title="Create a race." />
      <Card.Content>
        <TextInput value={name} onChangeText={setName} label="Name your race" />
        <TextInput
          value={description}
          onChangeText={setDescription}
          label="Describe your race"
        />
        <DateTimePicker
          style={{ marginTop: 20 }}
          value={date}
          mode="datetime"
          onChange={onDateSelected}
        />
        <Button style={{ marginTop: 20 }} onTouchEnd={saveButtonClicked}>
          Save
        </Button>
      </Card.Content>
    </Card>
  );
}
export default CreateRace;
