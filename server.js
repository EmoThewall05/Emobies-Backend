require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'Emobies API 🦋', time: new Date().toISOString() });
});

app.get('/api/health', (req, res) => {
  res.json({ ok: true, db: 'in-memory' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Emobies API on port ${PORT}`));
