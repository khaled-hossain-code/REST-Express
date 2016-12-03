const http = require('http');
const express = require('express');
const widgetRouter = require('./routers/widgets');
const app = express();


app.use('/api', widgetRouter);

app.listen(3000, ()=>{
    console.log('rest service running on port 3000');
})