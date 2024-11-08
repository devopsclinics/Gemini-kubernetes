// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/livestock', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'livestock.html'));
});

app.get('/poultry', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'poultry.html'));
});

app.get('/fishery', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'fishery.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
