"use client";

import { useAtom } from "jotai";
import { Volume2 } from "lucide-react";
import { playingAtom } from "~/atom";

export const CurrentPlaying = () => {
  const [currentPlaying] = useAtom(playingAtom);

  if (!currentPlaying) return null;

  return (
    <div className="absolute top-2 right-2">
      <Volume2 className="fill-primary stroke-primary h-4 w-4" />
    </div>
  );
};
