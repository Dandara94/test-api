const express = require('express');

const port = 8000;

const app = express()

app.use(express.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
   res.json('Welcome on Express').status(200);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});