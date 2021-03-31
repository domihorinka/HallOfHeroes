const router = require("express").Router();
const db = require("../models");


router.post("/api/character",({body},res)=>{
    db.character.create({})
    .then(dbcharacter => {
        res.json(dbcharacter);
    })
    .catch(err => {
        res.status(400).json(err);

    });
});

router.put('/api/character/:id',({body,params}, res) =>{
    db.character.findByIdAndUpdate(
        params.id, {
            $push: {
                character:body
            }
        },
        {
            new: true, runValidators: true,
        })
        .then(dbcharacter => {
            res.json(dbcharacter)
        })
        .catah(err => {
            res.status(400).json(err);
        });
});

router.get("/character",(req,res) => {
    db.character.find({
        title:{
            $regex: new RegExp(req.query.q, 'i')
        }
    })
    .then(character => res.json(character))
    .catch(err => res.status(422).end())
})






module.exports = router;  