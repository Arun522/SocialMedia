import { useNavigate } from "react-router-dom";

const FloatingActionButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/create")}
      className="fixed bottom-6 right-6 bg-black text-white p-4 rounded-full shadow-xl text-2xl"
    >
      ➕
    </button>
  );
};

export default FloatingActionButton;
