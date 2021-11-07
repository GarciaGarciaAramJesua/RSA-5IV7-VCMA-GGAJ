const express = require('express');

const app = express();
const port = process.env.PORT || "5000";

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});

app.use(express.static('./public'));

app.get("/", (req, res) => {
    res.sendFile("index.html");
});