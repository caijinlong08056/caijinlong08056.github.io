var posts=["2024/11/19/这是第一篇博文/","2024/11/21/这是另一篇新的博文2024-11-21/","2024/11/19/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };