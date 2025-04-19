"use client";
import useSound from "use-sound";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  AlignJustify,
  LaptopMinimal,
  Maximize,
  MicVocal,
  Pause,
  Play,
  PlusCircle,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume2,
} from "lucide-react";
import { Progress } from "../ui/progress";
import { useSideCannons } from "../home/confetti";
import { useAtom } from "jotai";
import { playingAtom } from "~/atom";

const music = "/song.mp3";
const totalSeconds = 211;

export const TrackInteraction = () => {
  const [playing, setPlaying] = useAtom(playingAtom);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const animationRef = useRef<number | null>(null);

  const { handleFireConfetti } = useSideCannons();

  const [play, { sound }] = useSound(music, {
    format: ["mp3"],
  });

  useEffect(() => {
    if (!sound) return;

    const updateProgress = () => {
      if (sound.playing()) {
        const seek = sound.seek() as number;
        const duration = sound.duration();
        setCurrentTime(seek);
        setProgress((seek / duration) * 100);
      }

      animationRef.current = requestAnimationFrame(updateProgress);
    };

    if (playing) {
      animationRef.current = requestAnimationFrame(updateProgress);
    } else {
      cancelAnimationFrame(animationRef.current!);
    }

    return () => {
      cancelAnimationFrame(animationRef.current!);
    };
  }, [playing, sound]);

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unload();
      }
    };
  }, [sound]);

  useEffect(() => {
    if (!sound) return;

    const handleEnd = () => {
      handleFireConfetti();
      setPlaying(false);
    };

    sound.on("end", handleEnd);

    return () => {
      sound.off("end", handleEnd);
    };
  }, [sound, handleFireConfetti, setPlaying]);

  const handlePlaySound = () => {
    if (sound) {
      sound.play();
    } else {
      play();
    }
    setPlaying(true);
  };

  const handlePauseSound = () => {
    sound.pause();
    setPlaying(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div className="fixed bottom-0 left-0 z-[9999] flex h-[80px] w-full items-center justify-between bg-black px-4">
      <div className="flex items-center gap-x-2">
        <div className="relative h-[50px] w-[50px] overflow-hidden rounded-[2px]">
          <Image
            src="https://i.scdn.co/image/ab67616d00001e0215ebbedaacef61af244262a8"
            alt="current-playing"
            fill
          />
        </div>

        <div className="flex flex-col">
          <p className="text-sm">Never Gonna Give You Up</p>

          <div className="flex items-center gap-x-2 text-[#B3B3B3]">
            <div className="flex h-2.5 w-3 items-center justify-center border border-[#B3B3B3]">
              <Play className="h-1.5 w-1.5 fill-[#B3B3B3]" />
            </div>
            <p className="text-xs">Music Video • Rick Astley</p>
          </div>
        </div>

        <PlusCircle className="ml-4 h-4 w-4 text-[#B3B3B3]" />
      </div>

      <div className="absolute left-[31.25%] flex w-[550px] flex-col items-center gap-y-1">
        <div className="flex items-center gap-x-6">
          <Shuffle className="h-5 w-5 text-[#B3B3B3]" />
          <SkipBack className="h-5 w-5 fill-[#B3B3B3] text-[#B3B3B3]" />

          {playing ? (
            <div
              onClick={handlePauseSound}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white text-black"
            >
              <Pause className="h-4 w-4 fill-black" />
            </div>
          ) : (
            <div
              onClick={handlePlaySound}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white text-black"
            >
              <Play className="h-4 w-4 fill-black" />
            </div>
          )}

          <SkipForward className="h-5 w-5 fill-[#B3B3B3] text-[#B3B3B3]" />
          <Repeat className="h-5 w-5 text-[#B3B3B3]" />
        </div>

        <div className="flex w-full items-center gap-x-2 text-xs text-[#B3B3B3]">
          <span>{formatTime(currentTime)}</span>

          <Progress value={progress} />

          <span>{formatTime(totalSeconds)}</span>
        </div>
      </div>

      <div className="flex items-center gap-x-4 text-[#B3B3B3]">
        <MicVocal className="h-4.5 w-4.5 cursor-pointer transition hover:text-white" />
        <AlignJustify className="h-4.5 w-4.5 cursor-pointer transition hover:text-white" />
        <LaptopMinimal className="h-4.5 w-4.5 cursor-pointer transition hover:text-white" />

        <div className="flex w-[100px] items-center gap-x-2">
          <Volume2 className="h-7 w-7 cursor-pointer transition hover:text-white" />
          <Progress value={100} />
        </div>

        <Maximize className="h-4.5 w-4.5 cursor-pointer transition hover:text-white" />
      </div>
    </div>
  );
};
