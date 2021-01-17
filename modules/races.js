import axios from "axios";
import { useEffect, useState } from "react";
import Config from "../config";

export function useRaces(user = false) {
  const [races, setRaces] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (user && mounted) {
      loadRaces();
    }
    return () => (mounted = false);
  }, []);

  function loadRaces() {
    console.log("loading races");
    axios
      .get(`${Config.apiUrl}/api/races`, {
        headers: {
          Authorization: `Bearer ${user.access_token}`,
        },
      })
      .then((res) => {
        setRaces(res.data.data || []);
      })
      .catch((res) => null);
  }
  return [races, false];
}

const Race = {
  name: "String",
  description: "",
  start_time: new Date(),
  distance_number: 0,
  distance_units: "",
};

const RaceWithId = {
  id: 1,
  ...Race,
};

/**
 *
 * @param {Race} data the race data
 * @returns {RaceWithId}
 */
export async function createRace(data) {
  console.log(data);
  return RaceWithId;
}

/**
 *
 * @param {RaceWithId} data the race data
 */
export async function updateRace(data) {
  console.log(data);
  return RaceWithId;
}
