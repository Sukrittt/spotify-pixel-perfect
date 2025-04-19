import { List, Maximize2, Plus, Search } from "lucide-react";
import { Playlists } from "../sidebar/playlists";

export const Sidebar = () => {
  return (
    <div className="flex flex-col gap-y-4 rounded-[10px] bg-[#121212] px-5 py-[12px]">
      <div className="flex items-center justify-between">
        <p>Your Library</p>

        <div className="flex items-center gap-x-5 pr-2">
          <button className="flex h-9 items-center gap-x-1 rounded-full bg-[#202020] px-3 text-sm text-white">
            <Plus className="h-6 w-6 stroke-[1px] text-[#B3B3B3]" />
            Create
          </button>

          <Maximize2 className="h-4 w-4 text-[#B3B3B3]" />
        </div>
      </div>

      <div className="flex items-center gap-x-2">
        <div className="rounded-full bg-[#343434] px-[11px] py-[5px] text-[14px] font-light">
          Playlists
        </div>

        <div className="rounded-full bg-[#343434] px-[11px] py-[5px] text-[14px] font-light">
          Artists
        </div>

        <div className="rounded-full bg-[#343434] px-[11px] py-[5px] text-[14px] font-light">
          Albums
        </div>
      </div>

      <div className="flex items-center justify-between text-[#B3B3B3]">
        <Search className="h-4.5 w-4.5 text-[#BDBCBC]" />

        <div className="flex items-center gap-x-2">
          <span className="text-sm">Recents</span>
          <List className="h-5 w-5" />
        </div>
      </div>

      <Playlists />
    </div>
  );
};
