import about_img from "../../../../src/assets/images/about_us.png";
import img from "../../../../src/assets/images/img.png";
import darkImg from "../../../../src/assets/images/darkImg.png";

export function AboutUs() {
  return (
    <section
      id="about_us"
      className="w-full min-h-screen flex items-center justify-center py-12 dark:bg-[#030712] md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start lg:items-start">
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
                  w-[200px] sm:w-[240px] lg:w-[470px]
                  text-white px-6 py-3 sm:px-8 sm:py-4
                  text-center leading-tight
                "
              >
                <div className="text-[28px] sm:text-[32px] lg:text-[32px] font-bold mb-1">
                  100+ Years
                </div>
                <div className="text-[24px] sm:text-[30px] lg:text-[32px] font-medium">
                  Experience Collectively
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center order-2 lg:order-2 mt-24 lg:mt-0">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#020202] dark:text-gray-200 mb-6 lg:mb-8 text-center md:text-start">
              About us
            </h2>

            <div className="space-y-5 sm:space-y-6 text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
              <p className=" text-[17px] sm:text-[18px] text-justify md:mb-48 dark:text-gray-200">
                D05 Design and Engineering is a family-owned detailing firm with
                over 100 years of combined experience serving projects across
                the United States. With deep shop, field, and detailing
                expertise, we deliver clear, accurate, and well-coordinated
                steel detailing. As a U.S.-based team supporting fabricators
                nationwide, we take pride in providing dependable service our
                clients can trust
              </p>

              <div className="flex justify-start mt-8 lg:mt-0">
                <img
                  src={img}
                  alt="Signature"
                  className="w-auto h-40 sm:h-48 lg:h-48 max-w-full dark:hidden"
                />
                <img
                  src={darkImg}
                  alt="Signature Dark"
                  className="w-auto h-40 sm:h-48 lg:h-48 max-w-full hidden dark:block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
