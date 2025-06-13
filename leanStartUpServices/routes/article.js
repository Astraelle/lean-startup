const express = require('express');
const auth = require('../middlewares/auth');
const isAdmin = require('../middlewares/admin');
const { getAllArticles, createArticle, getArticleById } = require('../controllers/articleController');

const router = express.Router();

router.post('/create-article', auth, isAdmin, createArticle);
router.get('/get-article', getAllArticles);
router.get('/:id', getArticleById);

module.exports = router;