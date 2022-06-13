import React from "react";
import "./Blog.css";
import blog1 from "../../assets/blog1.webp";

function Blog() {
  return (
    <div className="blog-section" id="blogs">
      <div className="container">
        <div className="section-text__header">
          <h3 className="section-text__title">Recent Blog Articles</h3>
          <div className="divider" />
        </div>
        <div className="article__container">
          <article className="blog blog1">
            <img src={blog1} alt="" />
            <h3 className="blog-title">Getting Started in the tech industry</h3>
            <div className="blog-overlay">
              <a href="https://mish-blog.hashnode.dev/how-to-get-started-in-the-tech-industry" target="_blank" rel="noreferrer">
                <button className="previewLink-btn">Read More</button>
              </a>
            </div>
          </article>
          <article className="blog blog1">
            <img src={blog1} alt="" />
            <h3 className="blog-title">Challenges faced as a rookie in the tech industry</h3>
            <div className="blog-overlay">
              <a href="https://mish-blog.hashnode.dev/challenges-faced-as-a-rookie-in-the-tech-industry" target="_blank" rel="noreferrer">
                <button className="previewLink-btn">Read More</button>
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Blog;
