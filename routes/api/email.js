const express = require('express')
const router = express.Router();
const {
  sendContact
} = require('../../controllers/email');

router.route('/contact')
.post(sendContact);




module.exports = router;
