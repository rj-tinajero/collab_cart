/*=====================================
  Imports
=====================================*/
const express = require('express');
const app = express();

/*=====================================
  MiddleWare and Dependencies
=====================================*/
app.use(express.static("public"));

/*=====================================
  Constants
=====================================*/
const port = process.env.PORT || 3000;


/*=====================================
  Connection
=====================================*/
app.listen(port, () => {
  console.log('listening......');
});