const express = require('express');
const path = require('path');

const app = express();
const port = 4000;

// Serve built Angular frontend
const frontendDistPath = path.join(__dirname, 'auto_apply', 'browser');

app.use(express.static(frontendDistPath));

// SPA fallback: for any non-file route, return index.html
app.use((req, res, next) => {
  // If the request doesn't match a static file, serve the SPA entry
  res.sendFile(path.join(frontendDistPath, 'index.html'));
});





app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`);
});

