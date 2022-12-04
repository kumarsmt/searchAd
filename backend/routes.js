const express = require('express');
const {db, dbString} = require('./db');
const router = express.Router();
router.get(`/:string`, async(req,res) => {
    res.send(await dbString(req.params.string))
})
router.get(`/`, async(req,res) => {
    res.send(await db())
})

module.exports = router;