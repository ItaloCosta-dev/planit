"use client";

import React, { useState, useEffect } from "react";
import { IoMdExit } from "react-icons/io";
import { User } from "firebase/auth";
import { auth } from "../services/firebase";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FaUser } from "react-icons/fa";

import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Aplication from "@/components/app-components/aplication";

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
          <span className="p-2 rounded-md text-slate-700 font-bold">
            planit
          </span>
        </div>

        <div className="hidden sm:block">
          <h1 className="font-semibold">Bem vindo ao planit</h1>
        </div>

        <div className="flex flex-row gap-2 items-center">
          <div className="hidden sm:flex flex-row gap-2 items-center">
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
                <Button
                  className="bg-slate-700"
                  onClick={handleNavigation}
                >
                  <IoMdExit size={20} />
                </Button>
              </>
            ) : (
              <span>Usuário não encontrado</span>
            )}
          </div>

          {/* Menu Mobile */}
          <div className="sm:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="p-2 bg-slate-700 text-white"><FaUser /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {user ? (
                  <>
                    <DropdownMenuLabel>Olá, {user.displayName}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleNavigation} className="cursor-pointer">
                      Sair
                    </DropdownMenuItem>
                  </>
                ) : (
                  <DropdownMenuItem>Usuário não encontrado</DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
     <Aplication />
    </div>
  );
};

export default TaskPage;
