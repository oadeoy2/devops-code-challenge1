const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const { CORS_ORIGIN } = require('./config');

const app = express();
const PORT = 8080;
const ID = uuidv4();

// Middleware
app.use(express.json());

// ✅ Enable CORS for frontend (localhost:3000 or from config)
app.use(cors({
  origin: CORS_ORIGIN || 'http://localhost:3000',
  methods: ['GET'],
}));

// ✅ Route for /api/guid
app.get('/api/guid', (req, res) => {
  console.log(`${new Date().toISOString()} GET /api/guid`);
  res.json({ message: `SUCCESS ${ID}` });
});

// ✅ Route for /
app.get('/', (req, res) => {
  res.send('✅ Backend is running. Try /api/guid');
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Backend started at http://localhost:${PORT}`);
});
