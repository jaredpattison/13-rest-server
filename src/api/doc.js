'use strict';

const express = require('express');
const swaggerUI = require('swagger-ui-express');
const router = express.Router();

const swaggerDocs = require('../../docs/config/swagger.json');
router.use('/api/v1/doc/', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
router.use('/api/v1/docs', express.static('docs'));
module.exports = router;
