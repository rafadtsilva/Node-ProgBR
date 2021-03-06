const express = require('express');
const router = express.Router();
const posts = require('../model/posts')
const cors = require('cors')

const options = {
  origin: "https://aprendendonode.herokuapp.com/"
}

router.use(cors(options))

router.get("/all", (req, res) => {

  res.json(JSON.stringify(posts.getAll()))

})

router.post("/new", express.json(), (req, res) => {

  let title = req.body.title;
  let description = req.body.description;

  posts.newPost(title, description)
  
  res.send("Post adicionado")

})

router.delete("/del", express.json(), (req, res) => {
  
  let id = req.body.id;

  posts.deletePost(id);

  res.send("Post deletado");

})

module.exports = router;