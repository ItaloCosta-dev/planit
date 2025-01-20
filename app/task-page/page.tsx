"use client";

import React, { useState, useEffect } from "react";
import { IoMdExit } from "react-icons/io";
import { User } from "firebase/auth";
import { auth } from "../services/firebase";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const TaskPage = () => {
  const [user, setUser] = useState<User | null>(null);

   const router = useRouter();
  
    const handleNavigation = () => {
      router.push("/");
    };

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  return (
    <div>
      <header className="bg-slate-200 flex flex-row justify-between items-center p-2">
        <div>
          <span className="bg-slate-700 p-2 rounded-md text-white font-bold">
            planit
          </span>
        </div>

        <div>
          <h1 className="font-semibold">Bem vindo ao planit</h1>
        </div>

        <div className="flex flex-row gap-2 justify-center items-center">
          {user ? (
            <>
              <span className="font-medium">{user.displayName}</span>
              {user.photoURL && (
                <Image
                  src={user.photoURL}
                  alt={`Perfil de ${user.displayName}`}
                  width={32}
                  height={32}
                  className="rounded-sm"
                />
              )}
              <Button className="bg-slate-700"  onClick={handleNavigation}><IoMdExit size={20} /></Button>
              
            </>
          ) : (
            <span>Usuário não encontrado</span>
          )}
        </div>
      </header>
      <h1>CALMA PAIZÃO, TÔ CONSTRUINDO</h1>
    </div>
  );
};

export default TaskPage;
