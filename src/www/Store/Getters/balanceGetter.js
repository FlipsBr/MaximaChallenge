const axios = require("axios");

const baseURL = "http://localhost:4000";
async function getBallance(client) {
  await axios.post(`${baseURL}/balance`, client, (res) => {
    console.log("no getter Balance", res.data);
    return res.data;
  });
}
