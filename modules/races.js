import axios from "axios";
import { useEffect, useState } from "react";
import Config from "../config";

export default async function getUserRaces(user) {
  try {
    const response = await axios.get(`${Config.apiUrl}/api/races`, {
      headers: {
        Authorization: `Bearer ${user.access_token}`,
      },
    });
    return response.data.data || [];
  } catch (e) {
    return [];
  }
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
export async function createRace(user, data) {
  try {
    const response = await axios.post(`${Config.apiUrl}/api/races`, data, {
      headers: {
        Authorization: `Bearer ${user.access_token}`,
      },
    });
    console.log(response.data);
  } catch (e) {
    console.warn(e);
  }
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
