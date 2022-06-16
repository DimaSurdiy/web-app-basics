const express = require('express');

const app = express();

app.listen(4444, () => {
  console.log(`Application server is running on port ${4444}`);
});
