const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

// build points my app to this server.
app.use(express.static('build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});



app.listen(port);
console.log('Server Started');
