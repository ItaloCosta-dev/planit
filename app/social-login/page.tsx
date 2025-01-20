"use client";

import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { auth } from "../services/firebase";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then(() => {
        router.push("/task-page");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="flex items-center justify-center h-screen p-3">
      <div className="flex flex-col items-center justify-center p-5 rounded-sm gap-3">
        <h1 className="text-4xl font-bold">Acesse o Planit</h1>
        <Button
          className="bg-white border flex items-center gap-2"
          onClick={handleGoogleSignIn}
        >
          <FcGoogle size={24} />
          <p className="text-black">Faça login com Google</p>
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
