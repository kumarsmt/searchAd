const express = require("express");
const cors = require('cors')
const app = express();
const routes = require('./routes')

app.use(cors());
app.use(express.json());
app.use(routes);
const port = process.env.PORT || 9000
app.listen(port, () => {
    console.log('Server started : ' + port)
})

