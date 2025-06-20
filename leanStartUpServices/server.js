require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const articleRoutes = require('./routes/article')

const app = express();
const PORT = process.env.PORT || 5000

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connection à mongoDB réussi'))
    .catch((err) => console.log('Erreur lors de la connection à mongoDB', err))

app.use('/api/auth', authRoutes);
app.use('/api/article', articleRoutes);

app.listen(PORT, () =>{
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
})