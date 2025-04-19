"use client";

import { useAtom } from "jotai";
import Image from "next/image";
import { playingAtom } from "~/atom";

export const RickVideo = () => {
  const [playing] = useAtom(playingAtom);

  return playing ? (
    <div className="relative w-full overflow-hidden rounded-[4px]">
      <video
        src="/rick.mp4"
        muted
        autoPlay
        className="h-[200px] w-full rounded-[4px]"
      />
    </div>
  ) : (
    <Image
      src="/rick.jpeg"
      alt="rick"
      height={300}
      width={300}
      className="rounded-[10px]"
    />
  );
};
