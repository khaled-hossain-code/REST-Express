const http = require('http');
const express = require('express');
const widgetRouter = require('./routers/widgets');
const bodyParser = require('body-parser');
const app = express();

app.use('/api', bodyParser.json());
app.use('/api', widgetRouter);

app.listen(3000, ()=>{
    console.log('rest service running on port 3000');
})