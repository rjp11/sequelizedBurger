var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        res.render("index", {
            burgers: data
        });
    });
});

router.post("/api/burgers", function (req, res) {
    
    burger.insertOne(req.body.burger_name, function (result) {

        // Send back the ID of the new burger
        res.json({
            id: result.insertId
        });
    });
});

router.put("/api/burgers/:id", function (req, res) {

    burger.updateOne(req.params.id, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;