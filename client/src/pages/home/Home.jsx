import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("/api/posts");
        setPosts(res.data);
        console.log(res);
      } catch (error) {
        // Not in the 200 response range
        // console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
