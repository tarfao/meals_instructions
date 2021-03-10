const PORT = 8000;
const express = require('express');
const cors = require('cors');
const router = require('./router');

const app = express();
app.use(cors());
app.use(router);

app.listen(PORT, () => {
    console.log("Server running in port 8000!");
})