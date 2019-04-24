const express = require('express')
const request = require('superagent')

const router = express.Router()

router.use(express.json())

router.get('/subreddit/:subreddit', (req, res) => {
  let sub = req.params.subreddit
  request
    .get(`http://www.reddit.com/r/${sub}.json`)
    .end((err, result) => {
      if (err) {
        res.status(500).send(err.message)
      } else {
        res.json(result.body.data.children)
      }
    })
})

module.exports = router
