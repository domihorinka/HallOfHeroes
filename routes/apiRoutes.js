const router = require("express").Router();
const db = require("../models");

router.get("/characters",(req,res) => {
    db.Character.find({
        title:{
            $regex: new ReqExp(req.query.q, 'i')
        }
    })
    .then(characters => res.json(recipes))
    .catch(err => res.status(422).end())
})

module.exports = router;