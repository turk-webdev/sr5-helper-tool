const Test = require('../models/test.models')

const getAllTestData = (req, res) => {
    Test.getAllTestData()
    .then(data => res.json(data).status(200))
    .catch(err => {
        console.error(err)
        res.json({'error': err}).status(500)
    })
}

module.exports = {
    getAllTestData,
}