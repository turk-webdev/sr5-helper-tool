const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

// Routing
app.use('/', require('./routes/index'))


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});