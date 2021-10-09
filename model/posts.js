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
  }

}

function generateID() {
  return Math.random().toString(36).substr(2,9);
}