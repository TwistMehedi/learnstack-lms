import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../firebase/firebase";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { setCredentials } from "../../redux/slice/userSlice";

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const SignIn = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      const userData = {
        uid: result.user.uid,
        name: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL,
        role: "student"
      };
       
      dispatch(setCredentials(userData));
      console.log("dispatch", userData)
    } catch (error: any) {
      console.error("Error code:", error.code);
      console.error("Error message:", error.message);
      console.error("Email:", error.customData?.email);

      const credential = GoogleAuthProvider.credentialFromError(error);
      console.error("Credential:", credential);
    }
  };

  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-100">
      <div className="card w-96 bg-white shadow-xl border rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          Sign in to LearnStack
        </h2>

        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline btn-accent w-full flex items-center justify-center gap-3"
        >
          <FcGoogle size={24} />
          <span>Continue with Google</span>
        </button>

        <p className="text-center text-sm mt-4 text-gray-500">
          By continuing, you agree to our{" "}
          <span className="underline cursor-pointer">Terms of Service</span> and{" "}
          <span className="underline cursor-pointer">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default SignIn;
