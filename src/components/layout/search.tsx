import Image from "next/image";
import { Search as SearchIcon } from "lucide-react";

export const Search = () => {
  return (
    <div className="relative flex h-12 w-full items-center gap-x-2 rounded-full bg-[#202020] pr-2">
      <SearchIcon className="absolute left-[10px] h-[25px] w-[25px] text-[#B3B3B3]" />

      <input
        placeholder="What do you want to play?"
        className="w-[410px] px-[44px] text-[16px] placeholder:text-[#B3B3B3]"
      />

      <div className="mr-1 h-6 w-px bg-[#7C7C7C]" />

      <Image src="/browse-new.png" alt="browse" width={27} height={27} />
    </div>
  );
};
