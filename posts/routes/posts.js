var models = require('../models')
var express = require('express')
var postRouter = express.Router()

postRouter.route('/')
  .get((req, res) => {
    models.Posts.findAll({
      attributes: ['id', 'title', 'categories'],
      limit: 40,
      order: 'createdAt DESC'
    }).then((data) => {
      res.json(data)
    })
  })
  .post((req, res) => {
    console.log(req.body.post)
    var post = req.body.post
    console.log(post)
    models.Posts.create({
      title: post.title,
      categories: post.categories,
      content: post.content
    }).then((data) => {
      res.json(data)
    })
  })
postRouter.route('/:id')
  .get((req, res) => {
    models.Posts.findById(req.params.id).then((data) => { res.json(data) })
  })
  .delete((req, res) => {
    models.Posts.destroy({
      where: {
        id: req.params.id
      }
    }).then((data) => {
      res.json(data)
    })
  })

module.exports = postRouter

