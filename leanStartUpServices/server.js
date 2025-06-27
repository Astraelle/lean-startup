<<<<<<< Updated upstream
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const articleRoutes = require('./routes/article');

const app = express();
const PORT = process.env.PORT || 5000

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connection à mongoDB réussi'))
    .catch((err) => console.log('Erreur lors de la connection à mongoDB', err));


app.use('/api/auth', authRoutes);
app.use('/api/article', articleRoutes);

app.get('/', (req, res) =>
    res.send('Api Fonctionne !')
)

app.listen(PORT, () =>{
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
=======
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const articleRoutes = require('./routes/article');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 5000

app.use(cors());
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
>>>>>>> Stashed changes
})