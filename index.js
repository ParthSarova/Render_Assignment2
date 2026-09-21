const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;


app.post("/post", (req, res) => {
    res.send("Hello")
})

app.get("/get", (req, res) => {
    res.send("Get Page")
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})