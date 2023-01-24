const express = require('express');
const PORT = 3000;

const app = express();

app.get('/test', (req, res) => {
    res.json({ ok: true});
});

app.get('/greet/:name', (req, res) => {
    res.json({ greeting: `Hello ${req.parsams.name}!` })
})

app.listen(PORT, () => console.log(`Server is now listening on port ${PORT}`));