import React, { useState } from "react";
import { Button, Card, TextInput } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import { createRace, updateRace } from "../../modules/races";

function CreateRace() {
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [date, setDate] = useState(new Date(1598051730000));
  const [distance, setDistance] = useState({
    number: 5,
    units: "killometers",
  });

  function onDateSelected(event, selectedDate) {
    const newDate = selectedDate || date;
    setDate(newDate);
  }

  function saveButtonClicked() {
    createRace({
      name: name,
      description: description,
      start_time: date,
      distance_number: distance.number,
      distance_units: distance.units,
    });
  }

  return (
    <Card>
      <Card.Title title="Create a race." />
      <Card.Content>
        <TextInput label="Name your race" />
        <DateTimePicker
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
