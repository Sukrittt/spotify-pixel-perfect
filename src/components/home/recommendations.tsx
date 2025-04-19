import { Play } from "lucide-react";
import Image from "next/image";
import { recommendations } from "~/lib/dummy";

export const Recommendations = () => {
  return (
    <div className="mt-6 flex flex-col gap-y-4">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-extrabold">Made for Sukrit Saha</h2>

        <p className="cursor-pointer text-[13px] text-[#C6C5C5] transition hover:text-white hover:underline">
          Show All
        </p>
      </div>

      <div className="flex items-center gap-x-2 overflow-x-auto">
        {recommendations.map((recommendation, index) => (
          <div
            key={index}
            className="group relative flex cursor-pointer flex-col gap-y-1 rounded-[8px] p-3 transition hover:bg-[#202020]"
          >
            <div className="bg-primary absolute right-4 bottom-16 z-50 flex h-12 w-12 items-center justify-center rounded-full text-black opacity-0 transition group-hover:opacity-100">
              <Play className="h-5 w-5 fill-black" />
            </div>

            <div className="fill relative h-[150px] w-[150px] overflow-hidden rounded-[10px]">
              <Image src={recommendation.image} alt="recommendation" fill />
            </div>

            <p className="mt-2 text-[13px] text-[#C6C5C5]">
              {recommendation.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
