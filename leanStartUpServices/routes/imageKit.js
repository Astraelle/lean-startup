const express = require('express');
const auth = require('../middlewares/auth');
const isAdmin = require('../middlewares/admin');

const router = express.Router();

router.post('/auth', auth, isAdmin, imageKitAuth)