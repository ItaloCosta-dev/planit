"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/social-login");
  };

  return (
    <header className="bg-purple-50 flex flex-row p-2 justify-between items-center">
      <div>
        <p className="font-bold">Planit</p>
      </div>
      <div>
        <Button className="bg-transparent border-2 border-purple-500 text-black hover:bg-purple-500 hover:text-white hover:border-purple-500"   onClick={handleNavigation}>
          Entrar
        </Button>
      </div>
    </header>
  );
};

export default Header;
