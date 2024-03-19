const express = require("express");
const config = require("config.json");

const app = express();

app.get("/api/:request", (res, req) => {
    console.log("recieved api request");
})

app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`);
});