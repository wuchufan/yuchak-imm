const express = require('express')
const router = express.Router();
const {
  sendContact,
  sendEvaluation
} = require('../../controllers/email');

router.route('/contact')
.post(sendContact);

router.route('/evaluation')
.post(sendEvaluation);


module.exports = router;
