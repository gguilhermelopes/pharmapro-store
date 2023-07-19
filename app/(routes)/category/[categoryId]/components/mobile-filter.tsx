"use client";

import { FC, useState } from "react";
import { Filter as FilterIcon, X } from "lucide-react";

import { Manufacturer } from "@/types";
import Button from "@/components/ui/button";
import { Dialog } from "@headlessui/react";
import IconButton from "@/components/ui/icon-button";

import Filter from "./filter";

interface MobileFilterProps {
  manufacturers: Manufacturer[];
}

const MobileFilter: FC<MobileFilterProps> = ({ manufacturers }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    <>
      <Button
        onClick={onOpen}
        className="flex rounded-xl items-center gap-x-2 lg:hidden"
      >
        Filtros
        <FilterIcon size={20} />
      </Button>

      <Dialog
        open={open}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>
            <div className="p-4">
              <Filter
                valueKey="manufacturerId"
                name="Fabricantes"
                data={manufacturers}
              />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilter;
