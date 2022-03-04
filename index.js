import fetch from "node-fetch";

async function getWithFetch() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const finalRes = await res.json();
  console.log(finalRes);
}

async function postWithFetch() {
  const data = {
    title: "foo",
    body: "bar",
    userId: 1,
  };

  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const finalRes = await res.json();
  console.log(finalRes);
}

async function putWithFetch() {
  const data = {
    title: "Mi dato",
    body: "Este es mi dato",
    userId: 1,
  };

  const res = await fetch("https://jsonplaceholder.typicode.com/posts/12", {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const finalRes = await res.json();
  console.log(finalRes);
}

async function deleteWithFetch() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/12", {
    method: "DELETE",
  });
  const finalRes = await res.json();
  console.log(finalRes);
}

// getWithFetch();
putWithFetch();

//deleteWithFetch();
