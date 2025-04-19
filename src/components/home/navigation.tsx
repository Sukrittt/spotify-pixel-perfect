export const Navigation = () => {
  return (
    <div className="flex items-center gap-x-2 text-sm">
      <button className="cursor-pointer rounded-full bg-white px-3 py-1.5 text-black">
        All
      </button>
      <button className="cursor-pointer rounded-full bg-[#483058] px-3 py-1.5">
        Music
      </button>
      <button className="cursor-pointer rounded-full bg-[#483058] px-3 py-1.5">
        Podcasts
      </button>
    </div>
  );
};
