const express = require('express');
const { getUser, createUser } = require('../controllers/authController');

const router = express.Router();

router.post('/register', createUser);
router.post('/login', getUser);

module.exports = router;