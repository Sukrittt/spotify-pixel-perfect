import { ChillPlaylists } from "~/components/home/chill";
import { Navigation } from "~/components/home/navigation";
import { Playlist } from "~/components/home/playlist";
import { RecentlyPlayed } from "~/components/home/recently-played";
import { Recommendations } from "~/components/home/recommendations";
import { TrackInteraction } from "~/components/layout/track-interaction";
import { HydrateClient } from "~/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <div className="flex h-[calc(100vh-80px)] flex-col gap-y-5 overflow-hidden overflow-y-auto rounded-[10px] bg-linear-to-b from-[#2F0D46] to-[#121212] to-20% px-8 py-4">
        <Navigation />

        <Playlist />

        <RecentlyPlayed />

        <Recommendations />

        <ChillPlaylists />

        <TrackInteraction />
      </div>
    </HydrateClient>
  );
}
