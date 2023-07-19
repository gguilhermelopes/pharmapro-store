"use client";

import { FC } from "react";
import { ShoppingCart } from "lucide-react";

import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";

interface InfoProps {
  data: Product;
}

const Info: FC<InfoProps> = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-700">
          <Currency value={data.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col justify-center gap-4">
        <h3 className="font-semibold text-black">{data.category.name}</h3>
        <div>
          <p>Fabricante: {data?.manufacturer.name} </p>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-4 ">
        <Button className="flex items-center gap-x-2">
          Adicionar ao carrinho <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
