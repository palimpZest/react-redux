const Task = require('../models/Task');

const Tasks = {
  create: (req, res) => {
    new Task({
      name: req.body.name || req.query.name,
      description: req.body.description || req.query.description
    }).save(err => {
      if (err) {
        res.render(err);
      } else {
        console.log('Task created');
        res.send('New task added !');
      }
    });
  },
  read: (req, res) => {
    Task.find({}, 'name description').exec((error, results) => {
      if (results.length === 0) {
        res.send([]);
      } else {
        res.send(results);
      }
    });
  },
  update: (req, res) => {
    Task.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      description: req.body.description
    }).exec(err => {
      if (err) {
        res.send({ error: true });
      } else {
        res.send(req.params.id);
      }
    });
  },
  delete: (req, res) => {
    Task.findByIdAndRemove(req.params.id).exec(err => {
      if (err) {
        res.send({ error: true });
      } else {
        res.send(req.params.id);
      }
    });
  }
};

module.exports = Tasks;
