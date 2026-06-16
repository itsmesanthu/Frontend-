import { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";

function Feed() {

  const [postText, setPostText] = useState("");

  const [posts, setPosts] = useState([
    {
      id: 1,
      name: "Virat Kohli",
      text: "The only thing we have is the moment",
      image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop",
     likes: 0
    },

    {
      id: 2,
      name: "MS Dhoni",
      text: "Trust the process",
      image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=400&fit=crop",
      likes: 0
    },
    {
      id: 3,
      name: "Hardik Pandya",
  text: "Believe in yourself and keep moving forward.",
  image: "https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=500&h=400&fit=crop", 
  likes: 0
    },
    {
      id: 4,
      name: "KL Rahul",
      text: "Stay focused and trust the process.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop",
       likes: 0
    },
    {
      id: 5,
      name: "Rohit Sharma",
      text: "Success comes from consistency.",
    image:
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=500&h=400&fit=crop",
       likes: 0
    }
  ]);

  function addPost() {

    const newPost = {
      id: Date.now(),
      name: "You",
      text: postText,
      image:
        "https://images.unsplash.com/photo-1511367461735-48585afb3c55?w=500&h=400&fit=crop",
      likes: 0
    };

    setPosts([newPost, ...posts]);
    setPostText("");
  }

  function likePost(id) {

    const updatedPosts = posts.map((post) => {

      if (post.id === id) {

        return {
          ...post,
          likes: post.likes + 1
        };
      }

      return post;
    });

    setPosts(updatedPosts);
  }

  return (

    <div
      style={{
        width: "60%",
        padding: "20px"
      }}
    >

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "20px",
          backgroundColor:"yellowgreen"
        }}
      >

        <input
          value={postText}
          onChange={(e) =>
            setPostText(e.target.value)
          }
          placeholder="What's on your mind?"
          style={{
            width: "70%",
            height: "35px"
          }}
        />

        <button
          onClick={addPost}
          style={{
            marginLeft: "10px",
            height: "40px",
            width: "100px"
          }}
        >
          Post
        </button>

      </div>

      {posts.map((post) => (

        <div
          key={post.id}
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "20px"
          }}
        >

          <h3>{post.name}</h3>

          <p>{post.text}</p>

          <img
            src={post.image}
            alt="post"
            style={{
              width: "100%",
              height: "450px",
              objectFit: "cover",
              borderRadius: "10px"
            }}
          />

          <br /><br />

          <button
            onClick={() =>
              likePost(post.id)
            }
          >
            <FaThumbsUp />
            {" "}
            {post.likes}
          </button>

        </div>
      ))}

    </div>
  );
}

export default Feed;