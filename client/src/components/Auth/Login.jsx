import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to VibeSnap</h1>
      <button
        className="bg-black text-white py-2 px-4 rounded-md"
        onClick={handleGoogleLogin}
      >
        Continue with Google
      </button>
    </div>
  );
};

export default Login;
