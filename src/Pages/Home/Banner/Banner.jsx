
import BannerVideo from "../../../assets/video/D05 Video.mp4";

const expo = [
  {
    id: 1,
    amount: "248 TONS",
    title: "STEEL FABRICATED",
  },
  {
    id: 2,
    amount: "3,458 TONS",
    title: "STEEL SUPPLIED ",
  },
  {
    id: 3,
    amount: "10,000+",
    title: "CLIENTS SERVED",
  },
];

export default function Home() {
  return (
    <div className="py-8 sm:py-10 md:py-10">
      {/* Mobile: Stack vertically | Desktop: 4-column grid */}
      <div className="flex flex-col md:grid md:grid-cols-4 gap-6 md:gap-[24px] items-start md:items-center md:h-[81vh] min-h-screen md:min-h-full">
        {/* Text Content */}
        <div className="order-2 md:order-1 md:col-span-2 flex flex-col justify-center  md:px-0">
          <h1 className="text-3xl sm:text-5xl md:text-[54px] leading-tight font-bold text-center md:text-start">
            Engineered <span className="text-label">for</span>
          </h1>
          <h1 className="text-3xl sm:text-5xl md:text-[54px] leading-tight font-bold text-center md:text-start">
            Excellence Trusted <span className="text-label">by</span>{" "}
          </h1>
          <h1 className="text-3xl sm:text-5xl md:text-[54px] leading-tight font-bold text-center md:text-start">
            <span className="text-label">Industries</span> Worldwide
          </h1>

          <p className="text-label text-lg sm:text-xl md:text-[24px] py-8 md:py-10 max-w-full  md:w-[636px] text-center md:text-start">
            Expertise in Structural & Miscellaneous Steel Fabrication and
            Detailing, We specialize in light to mid-size structural steel,
            miscellaneous metals, stair systems, wastewater infrastructure, and
            renovation work.
          </p>

          <button className="bg-button border-2 border-white px-8 py-4 w-full sm:w-[389px] h-[54px] hover:cursor-pointer rounded-[12px] shadow-md hover:shadow-lg text-background font-medium text-lg">
            Request a Quote
          </button>

          {/* Stats Section */}
          <div className="mt-12 md:mt-36">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-[24px]">
              {expo?.map((ex) => (
                <div
                  key={ex.id}
                  className="bg-[#F5F5F5] p-6 rounded-lg text-center shadow-sm"
                >
                  <h2 className="text-3xl sm:text-4xl font-bold text-primary">
                    {ex.amount}
                  </h2>
                  <p className="text-base sm:text-[19px] text-labela mt-2">
                    {ex.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Video Section - Shown first on mobile */}
        <div className="order-1 md:order-2 md:col-span-2 w-full h-[40vh] sm:h-[50vh] md:h-full flex items-center justify-center bg-black">
          <video
            src={BannerVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover md:object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
