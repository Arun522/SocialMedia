import { useState } from "react";
import { db, storage, auth } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";

const CreatePostPage = () => {
  const [caption, setCaption] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImages([...images, ...e.target.files]);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const uploadedImageUrls = [];

    try {
      for (let i = 0; i < images.length; i++) {
        const image = images[i];
        const storageRef = ref(storage, `posts/${auth.currentUser.uid}/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image);

        await uploadTask;
        const downloadURL = await getDownloadURL(storageRef);
        uploadedImageUrls.push(downloadURL);
      }

      await addDoc(collection(db, "posts"), {
        caption,
        images: uploadedImageUrls,
        userId: auth.currentUser.uid,
        username: auth.currentUser.displayName,
        userImage: auth.currentUser.photoURL,
        timestamp: serverTimestamp(),
        likes: 0,
        comments: 0,
      });

      navigate("/home");
    } catch (error) {
      console.error("Error creating post:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Create Post</h1>
      <textarea
        placeholder="Write a caption..."
        className="w-full p-2 border rounded-md mb-4"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <input
        type="file"
        multiple
        accept="image/*,video/*"
        onChange={handleImageChange}
        className="mb-4"
      />
      <div className="grid grid-cols-3 gap-2">
        {images.length > 0 &&
          Array.from(images).map((file, index) => (
            <div key={index} className="relative">
              <img
                src={URL.createObjectURL(file)}
                alt="preview"
                className="h-20 w-20 object-cover rounded-md"
              />
            </div>
          ))}
      </div>
      <button
        onClick={handleSubmit}
        className="bg-black text-white p-2 rounded-md w-full mt-4"
        disabled={loading}
      >
        {loading ? "Posting..." : "Post"}
      </button>
    </div>
  );
};

export default CreatePostPage;
