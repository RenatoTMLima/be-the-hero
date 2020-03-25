const express = require('express');

const app = express();

app.get('/users', (req, res) => {
   res.json({name: "Takao"})
})

app.listen(3333);