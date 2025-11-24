import { useState, useEffect, useRef } from "react";
import { Star, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialCard = ({ testimonial }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayText = isExpanded
    ? testimonial.text
    : testimonial.text.substring(0, 150) + "...";

  return (
    <div className="bg-white dark:bg-[#111827] dark:border-none rounded-lg p-5 sm:p-6 shadow-md border-2 border-gray-200 flex flex-col h-full">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < 4
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-gray-300 text-gray-300"
              }
            />
          ))}
        </div>
      </div>

      <p className="text-gray-700 text-sm sm:text-base leading-relaxed flex-1 mb-4">
        "{displayText}"
      </p>

      {testimonial.text.length > 150 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-600 text-sm font-medium flex items-center gap-1 mb-6 hover:text-gray-900 transition-colors"
        >
          Show {isExpanded ? "less" : "more"}
          <ChevronDown
            size={16}
            className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
          />
        </button>
      )}

      <div className="flex items-center gap-3 mt-auto">
        <img
          src={testimonial.img}
          alt={testimonial.author}
          className="rounded-full w-12 h-12 sm:w-14 sm:h-14 object-cover border-2 border-gray-200"
        />
        <div>
          <p className="font-semibold text-gray-900 text-sm sm:text-base">
            {testimonial.author}
          </p>
          <p className="text-gray-500 text-xs sm:text-sm">
            {testimonial.handle}
          </p>
        </div>
      </div>
      <p className="text-gray-500 text-xs mt-3">{testimonial.date}</p>
    </div>
  );
};

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const testimonials = [
    {
      text: "Working with SSE has been a game-changer for our projects. Their forged steel solutions are consistently high-quality, delivered on time, and tailored to our exact specifications.",
      author: "Alex Vo",
      handle: "@alex.Payne90",
      date: "23 Nov 2021",
      img: "https://img.freepik.com/premium-photo/young-confident-handsome-young-man-full-suit-looking-camera-keeping-arms-crossed-while-standing-against-grey-background_425904-39500.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      text: "The team at SSE delivered beyond expectations. From custom railings to complex structural steel, every piece was flawless. Their attention to detail made the entire process seamless.",
      author: "Jennifer Lee",
      handle: "@jennifer.lee",
      img: "https://img.freepik.com/free-photo/portrait-expressive-young-man-wearing-formal-suit_273609-6942.jpg?semt=ais_hybrid&w=740&q=80",
      date: "18 Oct 2023",
    },
    {
      text: "I've worked with many fabricators, but none match SSE's craftsmanship, speed, and pricing. They turned our vision into reality with stunning results.",
      author: "Marcus Chen",
      handle: "@marcuschen_arch",
      img: "https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?semt=ais_hybrid&w=740&q=80",
      date: "5 Mar 2024",
    },
    {
      text: "SSE transformed our space with their stunning steel staircase. The craftsmanship is unmatched and the team was professional from start to finish.",
      author: "Sarah Mitchell",
      handle: "@sarahmitchell_design",
      img: "https://media.istockphoto.com/id/1163294201/photo/smiling-confident-businesswoman-posing-with-arms-folded.jpg?s=612x612&w=0&k=20&c=9SY62tujbyx46_NbVH6pYAauliGvM0ixcaEfup9y_kU=",
      date: "12 Jan 2025",
    },
    {
      text: "Outstanding quality and service. Their custom forged railings elevated the entire look of our project. Highly recommend SSE to anyone seeking excellence.",
      author: "David Kim",
      handle: "@davidkim_co",
      img: "https://img.freepik.com/premium-photo/charismatic-mature-man-formal-suit-wear-eyewear_474717-71999.jpg?semt=ais_hybrid&w=740&q=80",
      date: "3 Feb 2025",
    },
  ];

  const totalSlides = testimonials.length;

  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timeoutRef.current);
  }, [totalSlides]);

  const goPrev = () => {
    clearInterval(timeoutRef.current);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goNext = () => {
    clearInterval(timeoutRef.current);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  // Responsive logic
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const slidesToShow = isMobile ? 1 : 3;
  const translateValue = -(currentIndex * (100 / slidesToShow));

  return (
    <section id="testimonial" className="py-12 sm:py-16 dark:bg-[#030712]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 md:mb-16">
          What Our Clients Say
        </h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow - Always outside, only visible on md+ */}
          <button
            onClick={goPrev}
            className="hidden md:block absolute left-[-80px] top-1/2 -translate-y-1/2 z-30 bg-white dark:bg-[#111827] shadow-2xl rounded-full p-2 hover:cursor-pointer hover:scale-110 transition-all border border-gray-300"
            aria-label="Previous"
          >
            <ChevronLeft size={30} className="text-gray-800 dark:text-white" />
          </button>

          {/* Right Arrow - Always outside */}
          <button
            onClick={goNext}
            className="hidden md:block absolute right-[-80px] top-1/2 -translate-y-1/2 z-30 dark:bg-[#111827] bg-white shadow-2xl rounded-full p-2 hover:cursor-pointer hover:scale-110 transition-all border border-gray-300"
            aria-label="Next"
          >
            <ChevronRight size={30} className="text-gray-800 dark:text-white" />
          </button>

          {/* Carousel Track */}
          <div
            className="overflow-hidden"
            onMouseEnter={() => clearInterval(timeoutRef.current)}
            onMouseLeave={() => {
              timeoutRef.current = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % totalSlides);
              }, 5000);
            }}
          >
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(${translateValue}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 ${
                    isMobile ? "w-full px-0" : "w-1/3 px-4"
                  }`}
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {[...Array(totalSlides)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`transition-all duration-300 ${
                  i === currentIndex
                    ? "w-12 h-2 bg-[#030712] rounded-full dark:bg-gray-600"
                    : "w-2 h-2 bg-[#030712] dark:bg-gray-600 rounded-full hover:bg-gray-600"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
