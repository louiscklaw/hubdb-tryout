const fs = require('fs')
const process = require('process')

const GITHUB_TOKEN = process.env.GITHUB_TOKEN

var db = Hubdb({
  token: GITHUB_TOKEN,
  username: 'louiscklaw',
  repo: 'hubdb-tryout',
  branch: 'db'
 });
 db.add({ grass: 'green' }, function() {
   db.list(function(err, res) {
     console.log(res)
   });
 });