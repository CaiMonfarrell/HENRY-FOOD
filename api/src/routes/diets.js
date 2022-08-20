const { Router } = require('express');
const { Diet } = require("../db")



const router = Router();



router.get("/", (req, res, next) => {

    return Diet.findAll().
    then(data => {
            res.send(data)
        })
        .catch((error) => {
            next(error)
        })
})

router.delete("/", (req, res, next) => {
    res.send("soy delete en diets")
})




module.exports = router;