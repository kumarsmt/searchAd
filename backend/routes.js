const express = require('express');
const db = require('./db');
const router = express.Router();
router.get(`/:string`, async(req,res) => {
    res.send(await db(req.params.string))
})
router.get(`/`, async(req,res) => {
    res.send(await db())
})

module.exports = router;