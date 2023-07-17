"use client";

import { useEffect, useState } from "react";

import Button from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const NavBarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex items-center rounded-lg px-4 py-2">
        <ShoppingCart size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">0</span>
      </Button>
    </div>
  );
};

export default NavBarActions;
