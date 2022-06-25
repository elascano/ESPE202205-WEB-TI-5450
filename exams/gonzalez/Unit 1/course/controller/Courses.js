const Course = require('../model/Course')

const getCourses = (req, ans) => {
    Course.find((err, Courses) => {
        err && ans.status(500).send(err.message)
        ans.status(200).json(Courses)
    })
}

module.exports = {getCourses}