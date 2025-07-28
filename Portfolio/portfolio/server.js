const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from the build directory
app.use(express.static('build'));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`🌐 Open http://localhost:${PORT} to view your portfolio`);
}); 