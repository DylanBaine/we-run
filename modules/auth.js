import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import { useState, useEffect } from "react";
import Config from "../config";

const storageKey = "Auth:current-user";

async function setUser(user) {
  // console.log("setUser", user);
  return await AsyncStorage.setItem(storageKey, JSON.stringify(user));
}

// const endpoint = "https://we-run.dylanbaine.com/api";
const endpoint = `${Config.apiUrl}/api`;
export async function attemptLogin(email, password) {
  try {
    const result = await axios
      .post(`${endpoint}/login`, { email, password })
      .then((res) => res.data.data);
    setUser(result);
    result._type = "success";
    return result;
  } catch (e) {
    console.error(e);
    return {
      ...e.response.data,
      _type: "error",
    };
  }
}

export function resetPassword(email) {}

export async function register(name, phone, email, password) {
  const payload = {
    name,
    phone,
    email,
    password,
  };
  try {
    const result = await axios
      .post(`${endpoint}/register`, payload)
      .then((res) => res.data.data);
    setUser(result);
  } catch (e) {
    return {
      ...e.response.data,
      _type: "error",
    };
  }
  return;
}

export async function checkState(user) {
  const res = await axios
    .get(`${Config.apiUrl}/api/user`)
    .then((res) => true)
    .catch((e) => false);
  return res;
}

export async function logout() {
  try {
    await axios.delete(`${endpoint}/tokens`);
  } catch (e) {}
  setUser(null);
}

export async function getUser() {
  try {
    const value = await AsyncStorage.getItem(storageKey);
    return JSON.parse(value);
  } catch (e) {
    return null;
  }
}

export function useUser() {
  const [_user, _setUser] = useState(null);

  useEffect(() => {
    let mounted = true;
    getUser().then((_u) => {
      if (mounted) {
        _setUser(_u);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  return _user;
}
