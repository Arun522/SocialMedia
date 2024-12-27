import { useState, useEffect } from "react";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import Post from "./Post";

const InfiniteScroll = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const q = query(
      collection(db, "posts"),
      orderBy("timestamp", "desc"),
      limit(20)
    );

    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => doc.data());
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="h-screen overflow-y-auto p-4">
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default InfiniteScroll;
