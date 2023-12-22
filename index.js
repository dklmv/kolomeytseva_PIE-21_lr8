const BLOG_LIST = document.querySelector(".blogs");

// Функция для добавления блогов на страницу
function addBlogToPage(blog) {
  let newBlog = document.createElement("div");
  let newBlogTitle = document.createElement("h1");
  let newBlogBody = document.createElement("p");

  newBlog.classList.add("blog");
  newBlog.append(newBlogTitle);
  newBlog.append(newBlogBody);

  newBlogTitle.textContent = blog.title;
  newBlogBody.textContent = blog.body;

  newBlogTitle.style.color = "black";
  newBlogBody.style.color = "black";

  BLOG_LIST.append(newBlog);
}

// Получение данных с API и добавление блогов на страницу
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((blog) => {
      addBlogToPage(blog);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
