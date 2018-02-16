const Task = require("../models/Task");

const Tasks = {
  create: (req, res, next) => {
    new Task({
      name: req.body.name || req.query.name,
      description: req.body.description || req.query.description
    }).save(err => {
      if (err) {
        res.render(err);
      } else {
        console.log(req.body);
        console.log("Task created");
        res.send("New task added !");
      }
    });
  },
  read: (req, res, next) => {
    Task.find({}, "name description").exec((error, results) => {
      if (results.length == 0) {
        res.send("There's been an error.");
      } else {
        res.send(results);
        console.log(results);
      }
    });
  },
  delete: (req, res, next) => {
    console.log(req.params.id);
    Task.findByIdAndRemove(req.params.id).exec(err => {
      if (err) {
        res.send({ error: true });
      } else {
        res.send({ error: false });
      }
    });
  }
};

module.exports = Tasks;