import "../styles/blogPreviewCardStyles.css";

const BlogPreviewCard = ({
  // @ts-expect-error bypass
  articleImage,
  // @ts-expect-error bypass
  badgeContent,
  // @ts-expect-error bypass
  publishedDate,
  // @ts-expect-error bypass
  title,
  // @ts-expect-error bypass
  synopsis,
  // @ts-expect-error bypass
  authorImage,
  // @ts-expect-error bypass
  authorName,
}) => {
  return (
    //<div className="blog-preview-container">
    <div className="blog-preview-card">
      <div className="image-section">
        <img className="article-image" src={articleImage} />
      </div>
      <div className="content">
        <div className="badge">{badgeContent}</div>
        <div className="published">Published {publishedDate}</div>
        <div className="title">{title}</div>
        <div className="synopsis figtree-medium">{synopsis}</div>
        <div className="author-container">
          <img
            src={authorImage}
            style={{ maxHeight: "32px", maxWidth: "32px" }}
          />
          <div className="author">{authorName}</div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default BlogPreviewCard;
