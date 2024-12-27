import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [posts, setPosts] = useState([]);
  const user = auth.currentUser;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserPosts = async () => {
      const q = query(collection(db, "posts"), where("userId", "==", user.uid));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => doc.data());
      setPosts(data);
    };

    fetchUserPosts();
  }, [user]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="p-4">
      {/* User Info */}
      <div className="flex items-center justify-center">
        <img
          src={user.photoURL}
          alt="profile"
          className="w-24 h-24 rounded-full border-2 border-gray-300"
        />
      </div>
      <h2 className="text-center text-2xl font-bold mt-2">{user.displayName}</h2>
      <p className="text-center text-gray-600">@{user.email}</p>
      <button
        onClick={() => navigate("/edit-profile")}
        className="bg-gray-800 text-white rounded-md px-4 py-1 mt-4 mx-auto block"
      >
        Edit Profile
      </button>

      {/* Posts */}
      <h3 className="text-lg font-semibold mt-6 mb-2">My Posts</h3>
      <div className="grid grid-cols-2 gap-4">
        {posts.map((post, index) => (
          <div key={index} className="relative">
            <img
              src={post.images[0]}
              alt="post"
              className="w-full h-40 object-cover rounded-md"
            />
            <p className="absolute bottom-2 left-2 text-white text-sm">{post.caption}</p>
          </div>
        ))}
      </div>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white rounded-md px-4 py-2 mt-6 block mx-auto"
      >
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
