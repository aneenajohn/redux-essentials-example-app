import { useSelector } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { PostAuthor } from "./postsAuthor";

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params;
  console.log(postId);
  const allPosts = useSelector((state) => state.posts);
  console.log({ allPosts });
  const post = allPosts.find((item) => item.id === postId);
  console.log("post in single post page", post);

  return (
    <section>
      {!post && <h2>Post Not Found</h2>}
      {post && (
        <article className="post">
          <h2>{post.title}</h2>
          <PostAuthor userId={post.user} />
          <p className="post-content">{post.content}</p>
          <Link to={`/editPost/${post.id}`} className="button">
            Edit Post
          </Link>
        </article>
      )}
    </section>
  );
};
