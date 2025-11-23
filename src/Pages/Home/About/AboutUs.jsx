import about_img from "../../../../src/assets/images/about_us.png";
import img from "../../../../src/assets/images/img.png";

export function AboutUs() {
  return (
    <section
      id="about_us"
      className="w-full min-h-screen flex items-center justify-center py-12  md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start lg:items-center">
          <div className="relative order-1 lg:order-1">
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-visible">
              <img
                src={about_img}
                alt="Team meeting at office"
                className="object-cover w-full h-full rounded-lg lg:rounded-none shadow-lg"
              />

              <div
                className="
                  absolute 
                  -top-10 -left-4 
                  sm:top-6 sm:left-6 
                  lg:-top-14 lg:-left-28 
                  w-[180px] sm:w-[220px] lg:w-[250px]
                  bg-gray-800/30 backdrop-blur-sm 
                  border border-white/50 shadow-lg
                  text-white px-4 py-3 sm:px-6 sm:py-4 
                  text-center
                "
              >
                <div className="text-[24px] sm:text-[30px] lg:text-[32px] font-medium leading-tight">
                  <div>Forging</div>
                  <div>the Future</div>
                </div>
              </div>

              <div
                className="
                  absolute 
                  -bottom-10 -right-4 
                  sm:bottom-6 sm:right-6 
                  lg:-bottom-16 lg:-right-28
                  md:mb-[11px]
                  bg-gray-800/30 backdrop-blur-sm 
                  border border-white/50 shadow-lg
                  w-[200px] sm:w-[240px] lg:w-[270px]
                  text-white px-6 py-3 sm:px-8 sm:py-4 
                  text-center leading-tight
                "
              >
                <div className="text-[28px] sm:text-[32px] lg:text-[32px] font-bold mb-1">
                  5+ Years
                </div>
                <div className="text-[24px] sm:text-[30px] lg:text-[32px] font-medium">
                  Experience
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center order-2 lg:order-2 mt-24 lg:mt-0">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-title mb-6 lg:mb-8 text-center md:text-start">
              About us
            </h2>

            <div className="space-y-5 sm:space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p className="text-label text-[17px] sm:text-[18px] text-justify">
                At SSE, we are committed to delivering uncompromising strength,
                precision, and reliability through our forged steel solutions.
                With years of industry expertise, we specialize in manufacturing
                high-quality forged steel components designed to withstand the
                toughest industrial demands.
              </p>

              <p className="text-label text-[17px] sm:text-[18px] text-justify">
                Our work is driven by innovation, craftsmanship, and a
                relentless focus on quality. From raw material to finished
                product, every stage of our process reflects our dedication to
                excellence. We partner with industries that depend on durability
                and performance — ensuring products that meet global standards
                and exceed expectations.
              </p>

              <p className="text-label text-[17px] sm:text-[18px] text-justify">
                <span className="font-semibold text-title">At SSE</span>, we
                don&apos;t just forge steel —<br className="sm:hidden" />
                we forge <span className="font-semibold text-title">trust</span>
                ,<span className="font-semibold text-title">durability</span>,
                and{" "}
                <span className="font-semibold text-title">
                  long-term value
                </span>
                .
              </p>

              {/* Signature/Decorative Image */}
              <div className="flex justify-center sm:justify-end mt-8 lg:mt-0">
                <img
                  src={img}
                  alt="Signature"
                  className="w-auto h-40 sm:h-48 lg:h-48 max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
