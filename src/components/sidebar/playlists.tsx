import { Pin } from "lucide-react";
import Image from "next/image";
import { playlists } from "~/lib/dummy";
import { CurrentPlaying } from "./current-playing";

export const Playlists = () => {
  return (
    <div className="flex max-h-[650px] flex-col gap-y-4 overflow-y-auto">
      {playlists.map((playlist, index) => (
        <div key={index} className="item-center relative flex gap-x-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-[4px]">
            <Image
              src={playlist.image}
              alt="playlist"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-y-1 text-sm">
            <p className="font-medium">{playlist.name}</p>

            <div className="flex items-center gap-x-2">
              {playlist.isPinned && (
                <Pin className="text-primary fill-primary h-3 w-3 rotate-45" />
              )}

              <p className="text-[#B3B3B3]">Playlist • {playlist.addInfo}</p>
            </div>
          </div>

          {playlist.toBePlayed && <CurrentPlaying />}
        </div>
      ))}
    </div>
  );
};
