"use client";

import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { auth } from "../services/firebase";
import { useState } from "react";
import Image from "next/image";

const Page = () => {
  const [user, setUser] = useState<User | null>(null);

  function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="flex items-center justify-center h-screen p-3">
      <div className="flex flex-col items-center justify-center p-5 rounded-sm gap-3">
        <h1 className="text-4xl font-bold">Acesse o Planit</h1>
        <Button className="bg-white border flex items-center gap-2" onClick={handleGoogleSignIn}>
          <FcGoogle size={24} />
          <p className="text-black">Faça login com Google</p>
        </Button>
        {user && (
          <div className="flex items-center gap-4 mt-4">
            {user.photoURL && (
              <Image
                src={user.photoURL}
                alt={user.displayName || "Foto do usuário"}
                width={50}
                height={50}
                className="rounded-full"
              />
            )}
            <strong className="text-lg">{user.displayName}</strong>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
