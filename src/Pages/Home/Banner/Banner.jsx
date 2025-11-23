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
    <div className="py-10">
      <div className="grid grid-cols-4 gap-[24px] items-center h-[81vh]">
        <div className="col-span-2 h-full flex flex-col justify-center">
          <h1 className="text-[54px]">
            Engineered <span className="text-label">for</span>
          </h1>
          <h1 className="text-[54px]">
            Excellence Trusted <span className="text-label">by</span>{" "}
          </h1>
          <h1 className="text-[54px]">
            <span className="text-label">Industries</span> Worldwide
          </h1>

          <p className="text-label text-[24px] py-10 w-[636px]">
            Expertise in Structural & Miscellaneous Steel Fabrication and
            Detailing, We specialize in light to mid-size structural steel,
            miscellaneous metals, stair systems, wastewater infrastructure, and
            renovation work.
          </p>

          <button className="bg-button border-2 border-white p-3 w-[389px] h-[54px] hover:cursor-pointer rounded-[12px] shadow-md hover:shadow hover:drop-shadow-[25px] text-background font-medium">
            Request a Quote
          </button>

          <div className="md:mt-24">
            <div className="grid grid-cols-3 gap-[24px] h-[140px]">
              {expo?.map((ex) => (
                <div
                  key={ex.id}
                  className="bg-[#F5F5F5] p-5 rounded-lg text-center shadow-sm"
                >
                  <h2 className="text-[24px] font-bold text-primary">
                    {ex.amount}
                  </h2>
                  <p className="text-[19px] text-labela mt-2">{ex.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-2 h-full flex items-center">
          <video
            src={BannerVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain rounded-lg bg-black"
          />
        </div>
      </div>
    </div>
  );
}
