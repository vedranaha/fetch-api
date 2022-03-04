async function getWithFetch() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const finalRes = await res.json();
  finalRes.splice(10);
  return finalRes;
}

async function createPosts() {
  const posts = await getWithFetch();
  console.log(posts);
  const myDiv = document.querySelector(".posts");
  /*
  posts.forEach((post) => {
    const inner = document.createElement("p");
    inner.innerText = post.title;
    myDiv.appendChild(inner);
  });*/
  for (let i = 0; i < posts.length; i++) {
    const inner = document.createElement("p");
    inner.innerText = posts[i].title;
    myDiv.appendChild(inner);
  }
}
