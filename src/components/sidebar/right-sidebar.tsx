import { CirclePlus } from "lucide-react";
import Image from "next/image";

export const RightSidebar = () => {
  return (
    <div className="flex flex-col gap-y-4 bg-[#121212] px-6 py-4">
      <h3 className="tracking-tight">MATUSHKA ULTRAFUNK</h3>

      <div className="relative h-[325px] overflow-hidden rounded-[4px]">
        <Image
          src="https://i.scdn.co/image/ab67616d0000b2734ed538dfd1d8bbe29346a023"
          alt="cover"
          fill
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-0">
          <h2 className="text-2xl font-semibold">Magical Funk</h2>
          <p className="text-[#BEBDBD]">luc wal</p>
        </div>

        <CirclePlus className="h-6 w-6 text-[#C5C3C4]" />
      </div>

      <div className="relative flex flex-col gap-y-4 overflow-hidden rounded-[10px] bg-[#202020] pb-4">
        <p className="absolute top-4 left-4 z-50 text-[15px]">
          About the artist
        </p>

        <div className="relative h-[200px]">
          <Image
            src="https://i.scdn.co/image/ab6761670000ecd474e83470c35492ba15b0a032"
            alt="artist details"
            className="object-cover"
            fill
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <p className="cursor-pointer px-4 text-[15px] underline-offset-4 hover:underline">
            luc wall
          </p>

          <div className="flex items-center justify-between px-4 text-[14px]">
            <p className="text-[#BCBBBB]">2,577,895 monthly listeners</p>

            <button className="cursor-pointer rounded-full border border-[#696969] px-4 py-1 transition hover:scale-105 hover:border-white">
              Follow
            </button>
          </div>

          <p className="px-4 text-[13px] text-[#BCBBBB]">
            Swedish/Polish biggest phonk producer in Sweden. (Multi genre )
            music producer trying to hit 4mil listener’s at the end of the
            year...
          </p>
        </div>
      </div>

      <div className="relative flex flex-col gap-y-4 overflow-hidden rounded-[10px] bg-[#202020] p-4">
        <div className="flex items-center justify-between text-sm">
          <p className="font-bold">Credits</p>
          <p className="cursor-pointer text-[13px] text-[#C6C5C5] hover:scale-105 hover:text-white hover:underline">
            Show All
          </p>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex flex-col gap-y-0 text-sm">
            <p>luc wall</p>
            <p className="text-[#BCBBBB]">Main Aritst</p>
          </div>

          <button className="cursor-pointer rounded-full border border-[#696969] px-4 py-1 transition hover:scale-105 hover:border-white">
            Follow
          </button>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex flex-col gap-y-0 text-sm">
            <p>Lucas Wallenrodd Gren</p>
            <p className="text-[#BCBBBB]">Composer, Lyricist</p>
          </div>
        </div>
      </div>
    </div>
  );
};
