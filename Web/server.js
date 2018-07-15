const express = require('express');
const app = express();
const port = 3000; 
const base = `${__dirname}/Public`;
app.use(express.static('Public'));

app.get('/', (req, res) => {
    res.sendFile(`${base}/device-list.html`);
});

app.get('*', (req, res) => {
    res.sendFile(`${base}/404.html`);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

