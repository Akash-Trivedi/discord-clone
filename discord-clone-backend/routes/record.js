/**
 * author: akash trivedi
 * date-created: 14-07-2022 11:32:16
 * functionality: 
 * caller-function: 
 * performs-network-request: 
 */

const express = require('express')
const recordRoutes = express.Router()
const dbo = require('../db/conn')
const objectId = require('mongodb').ObjectId

// get record
recordRoutes.route('/record').get(
  function (req, res) {
    let db_connect = dbo.getDb()
    let myquery = { _id: objectId(req.params.id) }
    db_connect
      .collection('records')
      .findOne(myquery, function (err, result) {
        if (err) throw err
        res.json(result)
      })
  }
)

// create new record
recordRoutes.route("/record/add").post(function (req, response) {
  let db_connect = dbo.getDb()
  let myobj = {
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
  }
  db_connect.collection("records").insertOne(myobj, function (err, res) {
    if (err) throw err
    response.json(res)
  })
})

// update record by id
recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb()
  let myquery = { _id: ObjectId(req.params.id) }
  let newvalues = {
    $set: {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level,
    },
  }
})

// delete record by id
recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb()
  let myquery = { _id: ObjectId(req.params.id) }
  db_connect.collection("records").deleteOne(myquery, function (err, obj) {
    if (err) throw err
    console.log("1 document deleted")
    response.json(obj)
  })
})

module.exports = recordRoutes