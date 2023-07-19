"use client";

import { FC, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

import { Manufacturer } from "@/types";
import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FilterProps {
  data: Manufacturer[];
  name: string;
  valueKey: string;
}
const Filter: FC<FilterProps> = ({ data, name, valueKey }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [displayedFilters, setDisplayedFilters] = useState(6);

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());
    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }
    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      {
        skipNull: true,
      }
    );
    router.push(url, { scroll: false });
  };

  const handleDisplayMoreClick = () => {
    setDisplayedFilters((prevState) => prevState + 6);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.slice(0, displayedFilters).map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              className={cn(
                "rounded-md text-sm text-gray-700 bg-white border border-slate-300",
                selectedValue === filter.id &&
                  "bg-slate-400 text-white border-transparent"
              )}
              onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
        {data.length >= displayedFilters && (
          <Button
            className="mt-2 rounded-xl text-sm"
            onClick={handleDisplayMoreClick}
          >
            Mostrar mais
          </Button>
        )}
      </div>
    </div>
  );
};

export default Filter;
