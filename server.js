const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the root directory
app.use(express.static(__dirname));

// Serve the HTML file for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'lib', 'Screens', 'HomePage.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});