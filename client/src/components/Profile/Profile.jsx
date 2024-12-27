import { auth } from "../../firebase";

const Profile = () => {
  const user = auth.currentUser;

  return (
    <div className="p-4">
      <img
        src={user.photoURL}
        alt="profile"
        className="w-32 h-32 rounded-full mx-auto"
      />
      <h1 className="text-center text-2xl font-bold mt-2">{user.displayName}</h1>
      <p className="text-center text-gray-600">@{user.email}</p>
    </div>
  );
};

export default Profile;
