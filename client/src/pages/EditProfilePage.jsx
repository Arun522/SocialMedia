import { useState } from "react";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const EditProfilePage = () => {
  const [name, setName] = useState(auth.currentUser.displayName || "");
  const [bio, setBio] = useState("");
  const navigate = useNavigate();

  const handleUpdateProfile = async () => {
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
      alert("Profile updated successfully!");
      navigate("/profile");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>
      <label className="block mb-2">Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded-md mb-4"
      />
      <label className="block mb-2">Bio</label>
      <textarea
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        className="w-full p-2 border rounded-md mb-4"
      />
      <button
        onClick={handleUpdateProfile}
        className="bg-black text-white p-2 rounded-md w-full"
      >
        Save Changes
      </button>
    </div>
  );
};

export default EditProfilePage;
