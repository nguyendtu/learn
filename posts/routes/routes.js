var express = require('express')
var router = express.Router()
var models = require('../models')

router.route('/')
  .get((req, res) => {
    models.Posts.findAll({
     limit: 40,
     order: ['createdAt', 'DESC']
    })
  })
  .post((req, res) => {
    models.Posts.create({
     title: req.body.title,
     categories: req.body.categories,
     content: req.body.content
    })
  })
router.route('/:id')
  .get((req, res) => {
    models.Posts.findById(req.params.id)
  })
  .delete((req, res) => {
    models.Posts.destroy({
      where: {
        id: req.params.id
      }
    })
  })

module.exports = router

