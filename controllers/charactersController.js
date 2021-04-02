const db = require("../models");

module.exports = {
    findAll: (req, res) =>{
        db.character
          .find(req.query)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    findById: (req,res) =>{
        db.character
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err))
    },
    create: (req,res) => {
        db.character
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err))
    },
    update: (req,res) =>{
        db.character
          .findOneAndUpdate({_id: req.params.id},req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    remove: (req,res) => {
        db.character
          .findById({_id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(ebModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    }

};