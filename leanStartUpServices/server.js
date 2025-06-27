require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const articleRoutes = require('./routes/article');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 5000

app.use(cors({
  origin: 'https://kollab-independant.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // if you need cookies/auth headers
}));
app.use(express.json());

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database.');
});

const baseName = process.env.BASENAME

app.use(baseName + '/api/auth', authRoutes);
app.use(baseName + '/api/article', articleRoutes);

app.get(baseName + '/', (req, res) =>
    res.send('Api Fonctionne !')
)

app.listen(PORT, () =>{
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
})