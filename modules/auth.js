import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import { useState, useEffect } from "react";

const storageKey = "Auth:current-user";

async function setUser(user) {
  return await AsyncStorage.setItem(storageKey, JSON.stringify(user));
}

// const endpoint = "https://we-run.dylanbaine.com/api";
const endpoint = "http://localhost:8000/api";
export async function attemptLogin(email, password) {
  try {
    const result = await axios
      .post(`${endpoint}/reginster`, { email, password })
      .then((res) => res.data);
    setUser(result);
  } catch (e) {
    return {
      ...e.response.data,
      _type: "error",
    };
  }
}

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
      .then((res) => res.data);
    setUser(result);
  } catch (e) {
    return {
      ...e.response.data,
      _type: "error",
    };
  }
  return;
}

export async function logout() {
  await axios.delete(`${endpoint}/tokens`);
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
  const [result, setResult] = useState(null);

  useEffect(() => {
    (async function () {
      const _user = await getUser();
      setResult(_user);
    })();
  }, []);

  return result;
}
