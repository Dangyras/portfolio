const express = require("express");

const app = express();

app.get("/api/projects", (req, res) => {
    const projects = [];

    res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
