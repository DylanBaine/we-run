import React, { useEffect, useState } from "react";
import { Button, View, Text, Alert } from "react-native";
import * as Location from "expo-location";
import GeoLocation from "./location/GeoLocation";

function App() {
  const [uiStatus, setUiStatus] = useState("pending");
  const [raceStarted, setRaceStarted] = useState(false);
  const [watchingPosition, setWatchingPosition] = useState(false);
  const [previousPosition, setPreviousPosition] = useState(null);
  const [currentPosition, setCurrentPosition] = useState(null);
  const [distanceTravelled, setDistanceTravelled] = useState(0);

  Location.requestPermissionsAsync().then(({ status }) => {
    if (status == "granted") {
      setUiStatus("waiting for race to start");
    } else {
      setUiStatus("need location permissions");
    }
  });

  useEffect(() => {
    if (raceStarted) {
      setUiStatus("race started");
    }
  }, [raceStarted]);

  function raceButtonClicked(e) {
    setDistanceTravelled(0);
    setRaceStarted(!raceStarted);
  }

  useEffect(() => {
    if (raceStarted && previousPosition) {
      setDistanceTravelled(
        distanceTravelled +
          currentPosition.getDifferenctFromLocationInFeet(previousPosition)
      );
    }
    setPreviousPosition(currentPosition);
  }, [currentPosition]);

  if (!watchingPosition) {
    console.log("subscribing to postion change");
    setWatchingPosition(true);
    /**
     *
     * @param {Location.LocationObject} location
     */
    function whenPositionChanged(location) {
      const newPosition = new GeoLocation(
        location.coords.latitude,
        location.coords.longitude,
        location.timestamp
      );
      setCurrentPosition(newPosition);
      console.log("position changed");
    }

    const getPositionConfig = {
      enableHighAccuracy: true,
      accuracy: Location.Accuracy.BestForNavigation,
    };
    const watchPositonCofig = {
      accuracy: Location.Accuracy.BestForNavigation,
      distanceInterval: 0.1,
      timeInterval: 50,
    };
    Location.watchPositionAsync(watchPositonCofig, whenPositionChanged);
  }

  return (
    <View
      style={{
        padding: 60,
        height: "100%",
        width: "100%",
      }}
    >
      <Button
        onPress={raceButtonClicked}
        title={raceStarted ? "Quit" : "Start"}
      ></Button>
      <Text>{raceStarted ? "Run Fast!" : "Race starting soon!"}</Text>
      <Text>Travelled: {distanceTravelled}</Text>
      {currentPosition && (
        <Text>Current Position: {JSON.stringify(currentPosition)}</Text>
      )}
      <Text
        style={{
          position: "absolute",
          alignSelf: "center",
          bottom: 40,
        }}
      >
        Status :: {uiStatus}
      </Text>
    </View>
  );
}

export default App;
