import { useNavigate } from "react-router-dom";

const CreatePostButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/create")}
      className="fixed bottom-6 right-6 bg-black text-white p-4 rounded-full shadow-lg"
    >
      ➕
    </button>
  );
};

export default CreatePostButton;
