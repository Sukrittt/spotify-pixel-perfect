import { Play } from "lucide-react";
import Image from "next/image";
import { playlists } from "~/lib/dummy";

export const Playlist = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {playlists.slice(0, 8).map((playlist, index) => (
        <div
          key={index}
          className="group relative flex items-center gap-x-2 overflow-hidden rounded-[5px] bg-white/10"
        >
          <div className="bg-primary absolute right-2 z-50 flex h-8 w-8 items-center justify-center rounded-full text-black opacity-0 transition group-hover:opacity-100">
            <Play className="h-[18px] w-[18px] fill-black" />
          </div>

          <div className="relative h-[47px] w-[47px]">
            <Image src={playlist.image} alt="playlist" fill />
          </div>

          <p className="text-sm">{playlist.name}</p>
        </div>
      ))}
    </div>
  );
};
