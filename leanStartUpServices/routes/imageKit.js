<<<<<<< Updated upstream
const express = require('express');
const auth = require('../middlewares/auth');
const isAdmin = require('../middlewares/admin');

const router = express.Router();

router.post('/auth', auth, isAdmin)
=======
const express = require('express');
const auth = require('../middlewares/auth');
const isAdmin = require('../middlewares/admin');
const 

const router = express.Router();

router.post('/auth', auth, isAdmin, imageKitAuth)
>>>>>>> Stashed changes
