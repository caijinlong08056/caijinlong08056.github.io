var posts=["2024/11/21/这是另一篇新的博文2024-11-21/","2024/11/24/过年/","2024/11/23/啄木鸟开店/","2024/11/23/小雪/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };