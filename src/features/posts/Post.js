import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
import { postAdd } from "./postSlice";

function Post(props) {
  const posts = useSelector((state) => state.posts);
  const users = useSelector(selectAllUsers);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    if (title && content && userId) {
      dispatch(postAdd(title, content, userId));
    }
  };

  const author = users.find(({ id }) => id === userId);

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post, i) => (
        <article key={i}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <span>by {author ? author.name : "Unknown author"}</span>
        </article>
      ))}
      <form onSubmit={submitForm}>
        <div>
          <input
            type={"text"}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <input
            type={"text"}
            placeholder="Content"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <div>
          <select onChange={(e) => setUserId(e.target.value)} value={userId}>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>

        <div style={{ marginTop: "15px" }}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Post;
