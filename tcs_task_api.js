const Data1 = require('./tcs_task')
const autoCatch = require('./lib/auto-catch')

module.exports = autoCatch({
  listData,
  createData,
  editData,
})


async function listData (req, res, next) {

  const data1= await Data1.list(req.body.mobile_number)

  res.json(data1)
}

async function createData (req, res, next) {
  
  const data1= await Data1.create(req.body)
  res.json(data1)
}

async function editData (req, res, next) {
 
  const change = req.body
  const data1 = await Data1.edit(req.params.id, change)

  res.json(data1)
}




