const db = require('../db')

const getAllTestData = () => {
    return db.many('SELECT * FROM test')
}

module.exports = {
    getAllTestData,
}