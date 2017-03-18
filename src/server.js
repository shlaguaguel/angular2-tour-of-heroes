const express = require('express');
const aap = express();

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 8080);
