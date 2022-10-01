const cuid = require('cuid')
const { da } = require('date-fns/locale')

const db = require('./db')

const Data = db.model('order', {
  _id: { type: String, default: cuid },
  mobile_number: { type: String, required: true},
  data: { type: String, required: true},
  status: { type: String, default: 'PENDING'},

})

module.exports = {
  list,
  create,
  edit,
  model: Data
}

async function list (mobile) {
  const data = await Data.find({mobile_number:mobile})
  return data
}
async function get (_id) {
  const product = await Data.findById(_id)
  return product
}
async function create (fields) {
  const data = new Data(fields)
  await data.save()
  return data
}

async function edit (_id, change) {
  const user = await get({ _id })
  if (change.data == user.data)
  {
  change.status = "DELIVERED"
  Object.keys(change).forEach(function (key) {
    user[key] = change[key]
  })
  await user.save()
  return user
}
else
{
  change.status = "REFUNDED"
  change.data = user.data
  Object.keys(change).forEach(function (key) {
    user[key] = change[key]
  })
  await user.save()
  return user
}
}

