const fs = require('fs')
const process = require('process')
const Hubdb = require('hubdb')

const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const TEST_DB ='helloworld_db.json'

var db = Hubdb({
  token: GITHUB_TOKEN,
  username: 'louiscklaw',
  repo: 'hubdb-tryout',
  branch: 'db'
  });

db.get(TEST_DB,(err, current_contents)=>{
  var updated_content = [...current_contents,{hello: 'travis2'}]

  db.update(TEST_DB,updated_content,(err, result, id) => {
    console.log(err)
    console.log(result)
  })
})
