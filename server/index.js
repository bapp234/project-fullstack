const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors()); // Quan trọng: Cho phép React gọi API
app.use(express.json());

// Kết nối MongoDB (sẽ dùng biến môi trường trên Render)
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/test";
mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Connected to DB'))
  .catch(err => console.error('❌ DB Error:', err));

// API Test
app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello from Render Backend! 🚀" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
