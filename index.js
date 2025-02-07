const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.json({
        email: "sopitanprecious1@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/Precious-Sopitan/basic-information-api"
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
