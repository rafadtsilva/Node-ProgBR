module.exports = { //tudo aqui dentro é um objeto

  posts: [
    {
      id: "123",
      title: "teste do mural",
      description: "descrição teste"
    },
  ],

  getAll() {
    return this.posts
  },

  newPost(title, description) {
    this.posts.push({ id: generateID(), title, description });
  },

  deletePost(id) {
    this.posts.forEach((post, i) => {
      console.log("posts.jd id: ",id)
      if(id === post.id) {
        this.posts.splice(i,1);
        console.log("posts.jd post.id: ",post.id)
      }
    })
  },

}

function generateID() {
  return Math.random().toString(36).substr(2,9);
}