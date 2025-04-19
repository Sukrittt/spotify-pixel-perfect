import { CirclePlus } from "lucide-react";
import Image from "next/image";
import { RickVideo } from "../home/rick-video";

export const RightSidebar = () => {
  return (
    <div className="flex h-[calc(100vh-80px)] flex-col gap-y-4 overflow-y-auto bg-[#121212] px-6 py-4">
      <h3 className="tracking-tight">Never Gonna Give You Up</h3>

      <RickVideo />

      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-0">
          <h2 className="text-xl font-semibold">Never Gonna Give You Up</h2>
          <p className="text-[#BEBDBD]">Rick Astley</p>
        </div>

        <CirclePlus className="h-6 w-6 text-[#C5C3C4]" />
      </div>

      <div className="relative flex flex-col gap-y-4 overflow-hidden rounded-[10px] bg-[#202020] pb-4">
        <p className="absolute top-4 left-4 z-50 text-[15px]">
          About the artist
        </p>

        <div className="relative h-[200px]">
          <Image
            src="https://i.scdn.co/image/ab6761670000ecd4ddf68e66cc67908f3a91e2e1"
            alt="artist details"
            className="object-cover"
            fill
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <p className="cursor-pointer px-4 text-[15px] underline-offset-4 hover:underline">
            Rick Astley
          </p>

          <div className="flex items-center justify-between px-4 text-[14px]">
            <p className="text-[#BCBBBB]">8,392,149 monthly listeners</p>

            <button className="cursor-pointer rounded-full border border-[#696969] px-4 py-1 transition hover:scale-105 hover:border-white">
              Follow
            </button>
          </div>

          <p className="px-4 text-[13px] text-[#BCBBBB]">
            It’s one of contemporary music’s most unlikely tales. At the age of
            21, Rick Astley emerged from the shadows of the Stock, Aitken and...
          </p>
        </div>
      </div>

      <div className="relative flex flex-col gap-y-4 overflow-hidden overflow-y-scroll rounded-[10px] bg-[#202020] p-4">
        <div className="flex items-center justify-between text-sm">
          <p className="font-bold">Credits</p>
          <p className="cursor-pointer text-[13px] text-[#C6C5C5] transition hover:scale-105 hover:text-white hover:underline">
            Show All
          </p>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex flex-col gap-y-0 text-sm">
            <p>Rick Astley</p>
            <p className="text-[#BCBBBB]">Main Aritst</p>
          </div>

          <button className="cursor-pointer rounded-full border border-[#696969] px-4 py-1 transition hover:scale-105 hover:border-white">
            Follow
          </button>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex flex-col gap-y-0 text-sm">
            <p>Mike Stock</p>
            <p className="text-[#BCBBBB]">Composer, Producer</p>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex flex-col gap-y-0 text-sm">
            <p>Matt Aitken</p>
            <p className="text-[#BCBBBB]">Composer, Producer</p>
          </div>
        </div>
      </div>
    </div>
  );
};
