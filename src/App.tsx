import { useEffect, useState } from "react";
import BlogPreviewCard from "./components/BlogPreviewCard";
import axios from "axios";

const App = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/Cerulean-Code/fakeBlog/main/blog.json"
      )
      .then((response) => {
        setBlogPosts(response.data["posts"]);
      });
  }, []);

  return (
    <>
      <h1
        className="figtree-medium"
        style={{
          textAlign: "center",
          fontSize: "40px",
        }}
      >
        Blog posts
      </h1>
      {
        //className "blog-preview-container" is needed to encapsulate all blog posts
      }
      <div className="blog-preview-container">
        {blogPosts.map((blogPost) => {
          if (blogPosts.length <= 0) {
            return "Nothing here";
          } else {
            return (
              <BlogPreviewCard
                // @ts-expect-error bypass
                key={blogPost.datePublished + blogPost.authorName}
                // @ts-expect-error bypass
                articleImage={blogPost.imageUrl}
                // @ts-expect-error bypass
                authorImage={blogPost.authorImageUrl}
                // @ts-expect-error bypass
                authorName={blogPost.authorName}
                // @ts-expect-error bypass
                badgeContent={blogPost.badge}
                // @ts-expect-error bypass
                publishedDate={blogPost.datePublished}
                // @ts-expect-error bypass
                synopsis={blogPost.description}
                // @ts-expect-error bypass
                title={blogPost.title}
              />
            );
          }
        })}
      </div>
    </>
  );
};

export default App;
