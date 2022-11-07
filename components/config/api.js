import React from "react";
import axios from "axios";

export const API = axios.create({
  baseURL:
    "https://api.v2.kontenbase.com/query/api/v1/a5d9c191-8415-482a-8df3-bb20787a8b23/",
});

export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.commin["Authorization"];
  }
};
