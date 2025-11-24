
import { useRef, useState } from "react";
import BannerVideo from "../../../assets/video/D05 Video.mp4";
import { IoVolumeMuteOutline, IoVolumeHighOutline } from "react-icons/io5";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";

const expo = [
  { id: 1, amount: "248 TONS", title: "STEEL FABRICATED" },
  { id: 2, amount: "3,458 TONS", title: "STEEL SUPPLIED" },
  { id: 3, amount: "10,000+", title: "CLIENTS SERVED" },
];

export default function Banner() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true); // AutoPlay = true on load

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="py-8 sm:py-10 md:py-10 dark:bg-[#030712]">
      <div className="flex flex-col md:grid md:grid-cols-4 gap-6 md:gap-[24px] items-start md:items-center md:h-[81vh] min-h-screen md:min-h-full">
        {/* Text Content - unchanged */}
        <div className="order-2 md:order-1 md:col-span-2 flex flex-col justify-center md:px-0">
          {/* ... your existing text, button, stats ... */}
          <h1 className="text-3xl sm:text-5xl md:text-[54px] dark:text-white leading-tight font-bold text-center md:text-start">
            Engineered <span className="text-label">for</span>
          </h1>
          <h1 className="text-3xl sm:text-5xl md:text-[54px] dark:text-white leading-tight font-bold text-center md:text-start">
            Excellence Trusted <span className="text-label">by</span>{" "}
          </h1>
          <h1 className="text-3xl sm:text-5xl md:text-[54px] leading-tight font-bold text-center md:text-start">
            <span className="text-label">Industries</span> Worldwide
          </h1>

          <p className="text-label text-lg sm:text-xl md:text-[24px] py-8 md:py-10 max-w-full md:max-w-[636px] text-center md:text-start">
            Expertise in Structural & Miscellaneous Steel Fabrication and
            Detailing. We specialize in light to mid-size structural steel,
            miscellaneous metals, stair systems, wastewater infrastructure, and
            renovation work.
          </p>

          <button className="bg-button border-2 border-white px-8 py-4 w-full sm:w-[389px] h-[54px] hover:cursor-pointer rounded-[12px] shadow-md hover:shadow-lg transition-all text-background font-medium text-lg">
            Request a Quote
          </button>

          <div className="mt-12 md:mt-36">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-[24px]">
              {expo.map((ex) => (
                <div
                  key={ex.id}
                  className="bg-[#F5F5F5] dark:bg-[#111827] p-6 border-2 border-white dark:border-none rounded-lg text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <h2 className="text-3xl sm:text-4xl dark:text-white font-bold text-primary">
                    {ex.amount}
                  </h2>
                  <p className="text-base sm:text-[19px] dark:text-white text-labela mt-2">
                    {ex.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Video with Play/Pause + Mute/Unmute Controls */}
        <div className="order-1 md:order-2 md:col-span-2 w-full h-[40vh] sm:h-[50vh] md:h-full flex items-center justify-center bg-black rounded-lg overflow-hidden shadow-2xl relative">
          <video
            ref={videoRef}
            src={BannerVideo}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover md:object-contain"
          />

          {/* Control Buttons */}
          <div className="absolute bottom-4 right-4 flex gap-3 z-10">
            {/* Play / Pause Button */}
            <button
              onClick={togglePlayPause}
              className="bg-white/90 hover:bg-white text-black p-3 rounded-full shadow-lg hover:shadow-xl transition-all backdrop-blur-sm border border-gray-300"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <BsPauseFill className="w-6 h-6" />
              ) : (
                <BsPlayFill className="w-6 h-6 ml-0.5" />
              )}
            </button>

            {/* Mute / Unmute Button */}
            <button
              onClick={toggleMute}
              className="bg-white/90 hover:bg-white text-black p-3 rounded-full shadow-lg hover:shadow-xl transition-all backdrop-blur-sm border border-gray-300"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <IoVolumeMuteOutline className="w-6 h-6" />
              ) : (
                <IoVolumeHighOutline className="w-6 h-6" />
              )}
            </button>
          </div>

          {!isPlaying && (
            <button
              onClick={togglePlayPause}
              className="absolute inset-0 flex items-center justify-center z-10 bg-black/40 backdrop-blur-sm hover:bg-black/50 transition-all"
              aria-label="Play video"
            >
              <BsPlayFill className="w-20 h-20 text-white drop-shadow-2xl" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
