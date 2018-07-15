const express = require('express');
const app = express();
const port = 3000; 
const base = `${__dirname}/Public`;
app.use(express.static('Public'));

app.listen(port, () => {
    console.log(`listening on port ${port}`);
   });
