const router = require('express').Router();
const apiRoutes = require('./api');

// add prefix of `/api` to all of the api routes imported from the `api` directory
router.use('/api', apiRoutes);

// If no API routes are hit
router.use((req, res) => {
  return res.send('Wrong route!');
});

module.exports = router;
