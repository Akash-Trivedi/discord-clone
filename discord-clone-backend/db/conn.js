/**
 * author: akash trivedi
 * date-created: 14-07-2022 11:25:01
 * functionality: connect to the database
 * caller-function: 
 * performs-network-request: 
 */
/**
 * special characters must be url encoded to go throught the internet
 * @: %40
 * #: %23
 */
// const DB = 'mongodb+srv://akashtrivedi:1%40mo9lo9ak7%23@cluster0.j5mkpat.mongodb.net/?retryWrites=true&w=majority'
const DB = 'mongodb://localhost:27017/bookstore'
const { MongoClient } = require('mongodb')
// const DB = process.env.ATLAS_URL
const client = new MongoClient(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
)

var _db

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (db) {
        _db = db.db('employees')
        console.log('connection was successfull')
      }
      return callback(err)
    })
  },
  getDb: function () {
    return _db
  }
}
