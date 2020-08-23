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

// db.list((err, a)=>{
//   console.log('listing,', a)
// })

// db.get("4c30d8a1b5dcde897cc51aca2a8abfab.json",(err, contents)=>{
//   console.log('get,', contents)
// })

db.get(TEST_DB,(err, current_contents)=>{
  console.log(current_contents)

  var updated_content = [...current_contents,{hello: 'travis'}]

  db.update(TEST_DB,updated_content,(err, result, id) => {
    console.log(err)
    console.log(result)
  })
})
