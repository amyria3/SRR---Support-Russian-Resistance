import axios from "axios";

const axios = require("axios");

export async function getDataFromServer() {
  try {
    const response = await axios.get("https://<dein-projektname>.glitch.me/");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
