const express = require('express');
const widgetRouter = express.Router();

widgetRouter.route('/widgets')
 .get((req, res)=>{
    res.json([
        { name: 'widget 1', color:'blue', size:'large', qty: 3 },
        { name: 'widget 2', color:'red', size:'medium', qty: 5 },
        { name: 'widget 3', color:'yellow', size:'small', qty: 8 }
    ]);
 })
 .post();

widgetRouter.route('/widgets/:widgetId')
 .get()
 .put()
 .delete();

module.exports = widgetRouter;