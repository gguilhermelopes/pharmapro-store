"use client";

import { useEffect, useState } from "react";

import Button from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

const NavBarActions = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-lg px-4 py-2 bg-white "
      >
        <ShoppingCart size={20} color="#031506" />
        <span className="ml-2 text-sm font-bold text-custom800">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavBarActions;
