
import about_img from "../../../../src/assets/images/about_us.png";
import img from "../../../../src/assets/images/img.png";

export function AboutUs() {
  return (
    <section
      id="about_us"
      className="w-full h-screen flex items-center justify-center py-16 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative w-full h-[500px] lg:h-[600px]">
              <img
                src={about_img}
                alt="Team meeting at office"
                className="object-cover w-full h-full rounded-none"
              />

              {/* Top Left Badge */}
              <div
                className="absolute -top-14 -left-28 w-[250px] 
                bg-gray-800/30 backdrop-blur-sm 
                border border-white/50
                shadow-lg
                text-white px-6 py-4"
              >
                <div className="text-[32px] font-medium leading-tight text-center">
                  <div>Forging</div>
                  <div>the Future</div>
                </div>
              </div>

              {/* Bottom Right Badge */}
              <div
                className="absolute -bottom-16 -right-28
                bg-gray-800/30 backdrop-blur-sm 
                border border-white/50
                shadow-lg
                w-[270px]
                text-white px-8 py-4 text-center leading-tight"
              >
                <div className="text-[32px] font-bold mb-1">5+ Years</div>
                <div className="text-[32px] font-medium">Experience</div>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl lg:text-6xl font-bold text-title mb-8">
              About us
            </h2>

            <div className="space-y-6 text-gray-700 text-base leading-relaxed">
              <p className="text-label text-[18px] text-justify">
                At SSE, we are committed to delivering uncompromising strength,
                precision, and reliability through our forged steel solutions.
                With years of industry expertise, we specialize in manufacturing
                high-quality forged steel components designed to withstand the
                toughest industrial demands.
              </p>

              <p className="text-label text-[18px] text-justify">
                Our work is driven by innovation, craftsmanship, and a
                relentless focus on quality. From raw material to finished
                product, every stage of our process reflects our dedication to
                excellence. We partner with industries that depend on durability
                and performance — ensuring products that meet global standards
                and exceed expectations.
              </p>

              <p className="text-label text-[18px] text-justify">
                <span className="font-semibold text-title">At SSE</span>, we
                don't just forge steel —<br />
                we forge <span className="font-semibold text-title">trust</span>
                ,<span className="font-semibold text-title">durability</span>,
                and{" "}
                <span className="font-semibold text-title">
                  long-term value
                </span>
                .
              </p>

              <div className="flex justify-end ms-32">
                <img
                  src={img}
                  alt="Decorative"
                  className="w-auto h-52 lg:h-48"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
