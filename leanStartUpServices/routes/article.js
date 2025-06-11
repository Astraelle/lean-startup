const express = require('express');
const Article = require('../models/article.model');
const auth = require('../middlewares/auth');
const isAdmin = require('../middlewares/admin');
const { getAllArticles, createArticle } = require('../controllers/articleController');

const router = express.Router();

router.post('/create-article', auth, isAdmin, createArticle);
router.get('/get-article', getAllArticles);

module.exports = router;