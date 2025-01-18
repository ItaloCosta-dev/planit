import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center h-screen p-3">
      <div className="flex flex-col items-center justify-center p-5 rounded-sm gap-3">
        <h1 className="text-4xl font-bold">Acesse o planit</h1>
        <Button className="bg-white border">
          <FcGoogle />
          <p className="text-black">Faça login com Google</p>
        </Button>
      </div>
    </div>
  );
};

export default page;
