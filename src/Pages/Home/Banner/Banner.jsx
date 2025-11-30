

import { useRef, useState, useEffect } from "react";
import BannerVideo from "../../../assets/video/D05 Video.mp4";
import { IoVolumeMuteOutline, IoVolumeHighOutline } from "react-icons/io5";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";

export default function Banner() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.muted = true; // Required for autoplay
        setIsMuted(true);

        videoRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Autoplay blocked (rare when muted)
          });
      }
    }, 3000); // exactly 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const togglePlayPause = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div className="py-8 sm:py-10 md:py-10 dark:bg-[#030712]">
      <div className="flex flex-col md:grid md:grid-cols-4 gap-6 md:gap-[24px] items-start md:items-center md:h-[81vh]">
        {/* Text Content */}
        <div className="order-2 md:order-1 mt-5 md:mt-0 md:col-span-2 flex flex-col justify-center">
          <h1 className="text-4xl md:text-[54px] dark:text-white leading-tight font-bold text-center md:text-start">
            Detailed <span className="text-label">for</span>
          </h1>
          <h1 className="text-4xl md:text-[54px] dark:text-white leading-tight font-bold text-center md:text-start">
            Excellence Trusted
          </h1>
          <h1 className="text-4xl md:text-[54px] leading-tight font-bold text-center md:text-start">
            <span className="text-label">Nationwide</span>
          </h1>

          <p className="text-[#868686] text-lg sm:text-xl md:text-[24px] py-8 md:py-10 max-w-full md:max-w-[636px] dark:text-gray-200 md:text-start text-justify">
            Our extensive experience in structural steel, miscellaneous metals,
            and steel stair design and fabrication enables us to deliver
            precise, code-compliant detailing that improves coordination,
            reduces errors, and elevates overall project quality.
          </p>

          <a
            href="/#quote"
            className="inline-block bg-button border-2 border-white px-8 py-4 w-full sm:w-[389px] h-[54px] rounded-[12px] 
                       shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-background font-medium text-lg text-center"
          >
            Request a Quote
          </a>
        </div>

        {/* Video - starts after exactly 3 seconds */}
        <div className="order-1 md:order-2 md:col-span-2 w-full h-[40vh] sm:h-[50vh] md:h-full rounded-lg overflow-hidden shadow-2xl relative bg-black">
          <video
            ref={videoRef}
            src={BannerVideo}
            loop
            muted={isMuted}
            playsInline
            preload="auto"
            className="w-full h-full object-cover md:object-contain"
          />

          {/* Controls */}
          <div className="absolute bottom-6 right-6 flex gap-4 z-30 bg-black/70 border-2 border-white backdrop-blur-md rounded-full p-2 md:p-4 shadow-2xl">
            <button
              onClick={togglePlayPause}
              className="bg-white hover:bg-gray-100 text-black p-3 md:p-4 rounded-full transition-all hover:scale-110 shadow-lg"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <BsPauseFill className="w-5 h-5 md:w-8 md:h-8" />
              ) : (
                <BsPlayFill className="w-5 h-5 md:w-8 md:h-8 ml-1" />
              )}
            </button>

            <button
              onClick={toggleMute}
              className="bg-white hover:bg-gray-100 text-black p-3 md:p-4 rounded-full transition-all hover:scale-110 shadow-lg"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <IoVolumeMuteOutline className="w-5 h-5 md:w-8 md:h-8" />
              ) : (
                <IoVolumeHighOutline className="w-5 h-5 md:w-8 md:h-8" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
