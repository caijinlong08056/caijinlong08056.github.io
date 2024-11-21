var posts=["2024/11/19/hello-world/","2024/11/19/这是第一篇博文/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };