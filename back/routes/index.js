const express = require('express');
const router = express.Router();
const Tasks = require('../controllers/Tasks');

router
  .route('/')
  .get(Tasks.read)
  .post(Tasks.create);

router.put('/:id', Tasks.update);
router.delete('/:id', Tasks.delete);

module.exports = router;
