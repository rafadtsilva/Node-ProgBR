// const { options } = require("../../routes/api");

// const { options } = require("../../routes/api");
document.addEventListener('DOMContentLoaded', () => {
  updatePosts();
})


function updatePosts() {

  const options = { 
    method: "GET", 
    headers: new Headers({
      'content-type': 'application/json', 
      'Host': 'https://aprendendonode.herokuapp.com/'
    }),
  }

  fetch("https://aprendendonode.herokuapp.com/api/all", options).then(res => {
    return res.json()
  }).then(json => {

    let postElements = '';
    let posts = JSON.parse(json);
    posts.forEach(post => {
      let postElement = `
        <div id="${post.id}" class="card mt-4">
          <div class="card-header">
            <h5 class="card-title d-inline">${post.title}</h5>
            <span id="${post.id}"class="delete float-end">X</span>
          </div>
        <div class="card-body">
          <div class="card-text">${post.description}</div>
        </div>
      </div>`;
      postElements += postElement;
    })

    // let postsTag = document.getElementById("myPosts");
    // postsTag.innerHTML = postElements;

    myPosts.innerHTML = postElements;

    let teste = document.querySelectorAll(".delete")
    teste.forEach(test => {
      test.addEventListener('click', deletePost)
    })
  })

}

function newPost() {

  let title = document.getElementById("title").value;
  let description = document.getElementById("desc").value;

  let post = { title, description };

  const options = { 
    method: "POST", 
    headers: new Headers({
      'content-type': 'application/json'}),
    body: JSON.stringify(post)
  }     

  fetch("https://aprendendonode.herokuapp.com/api/new", options).then(res => {
    console.log(res);
    updatePosts();

    document.getElementById("title").value = '';
    document.getElementById("desc").value = '';

  })

}

function deletePost (event) {

  // let ids = document.getElementById("posts");
  let id = event.target.id;

  let del = { id };

  const options = {
    method: "DELETE",
    headers: new Headers({
      'content-type': 'application/json', 
      'Host': 'https://aprendendonode.herokuapp.com/'
    }),
    body: JSON.stringify(del)
  }
  fetch("https://aprendendonode.herokuapp.com/api/del", options).then(res => {
    updatePosts();
  })

}

