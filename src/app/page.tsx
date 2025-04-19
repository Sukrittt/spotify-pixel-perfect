import { HydrateClient } from "~/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <div className="h-full bg-red-200">content</div>
    </HydrateClient>
  );
}
