import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/home" className="text-xl font-bold">
        VibeSnap
      </Link>
      <div className="flex gap-4">
        <Link to="/profile" className="text-gray-700">
          Profile
        </Link>
        <Link to="/create" className="text-gray-700">
          New Post
        </Link>
      </div>
    </div>
  );
};

export default Header;
