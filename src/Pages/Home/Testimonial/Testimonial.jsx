// import { useState } from "react";
// import { Star, ChevronDown } from "lucide-react";

// const TestimonialCard = ({ testimonial }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const displayText = isExpanded
//     ? testimonial.text
//     : testimonial.text.substring(0, 150) + "...";

//   return (
//     <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
//       {/* Star Rating */}
//       <div className="flex items-center gap-2 mb-4">
//         <div className="flex gap-0.5">
//           {[...Array(5)].map((_, i) => (
//             <Star
//               key={i}
//               size={16}
//               className={
//                 i < 4
//                   ? "fill-yellow-400 text-yellow-400"
//                   : "fill-gray-300 text-gray-300"
//               }
//             />
//           ))}
//         </div>
//         <span className="text-sm text-blue-600 font-medium">
//           Verified Clients
//         </span>
//       </div>

//       {/* Testimonial Text */}
//       <p className="text-gray-700 text-sm mb-4 leading-relaxed">
//         "{displayText}"
//       </p>

//       {/* Show More Link */}
//       <button
//         onClick={() => setIsExpanded(!isExpanded)}
//         className="text-gray-600 text-sm font-medium flex items-center gap-1 mb-6 hover:text-gray-900"
//       >
//         Show {isExpanded ? "less" : "more"} <ChevronDown size={16} />
//       </button>

//       {/* User Info */}
//       <div className="flex items-center gap-3">
//         <img
//           src="/diverse-user-avatars.png"
//           alt={testimonial.author}
//           className="w-10 h-10 rounded-full bg-gray-300"
//         />
//         <div>
//           <p className="font-semibold text-gray-900 text-sm">
//             {testimonial.author}
//           </p>
//           <p className="text-gray-500 text-xs">{testimonial.handle}</p>
//         </div>
//       </div>

//       {/* Date */}
//       <p className="text-gray-500 text-xs mt-3">{testimonial.date}</p>
//     </div>
//   );
// };

// export default function Testimonials() {
//   const testimonials = [
//     {
//       text: "Working with SSE has been a game-changer for our projects. Their forged steel solutions are consistently high-quality, delivered on time, and tailored to our exact specifications. Reliability and precision – they truly set the industry standard.",
//       author: "Alex Vo",
//       handle: "@alex.Payne90",
//       date: "23 Nov 2021",
//     },
//     {
//       text: "Working with SSE has been a game-changer for our projects. Their forged steel solutions are consistently high-quality, delivered on time, and tailored to our exact specifications. Reliability and precision – they truly set the industry standard.",
//       author: "Alex Vo",
//       handle: "@alex.Payne90",
//       date: "23 Nov 2021",
//     },
//     {
//       text: "Working with SSE has been a game-changer for our projects. Their forged steel solutions are consistently high-quality, delivered on time, and tailored to our exact specifications. Reliability and precision – they truly set the industry standard.",
//       author: "Alex Vo",
//       handle: "@alex.Payne90",
//       date: "23 Nov 2021",
//     },
//   ];

//   return (
//     <section className="py-16 px-4 ">
//       <div className="max-w-7xl mx-auto">
//         {/* Title */}
//         <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
//           Testimonials
//         </h2>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//           {testimonials.map((testimonial, index) => (
//             <TestimonialCard key={index} testimonial={testimonial} />
//           ))}
//         </div>

//         {/* View All Link */}
//         <div className="flex justify-end">
//           <a href="#" className="text-blue-600 font-medium hover:text-blue-700">
//             View All
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import { Star, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialCard = ({ testimonial }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayText = isExpanded
    ? testimonial.text
    : testimonial.text.substring(0, 150) + "...";

  return (
    <div className="b rounded-lg p-6 shadow-md  border-2 border-gray-200 flex flex-col h-full">
      {/* Stars */}
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

      {/* Text */}
      <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-4">
        "{displayText}"
      </p>

      {/* Show more */}
      {testimonial.text.length > 150 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-600 text-sm font-medium flex items-center gap-1 mb-6 hover:text-gray-900"
        >
          Show {isExpanded ? "less" : "more"}
          <ChevronDown
            size={16}
            className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
          />
        </button>
      )}

      {/* Author */}
      <div className="flex items-center gap-3 mt-auto">
        <img
          src={testimonial.img}
          alt=""
          className="rounded-full w-14 h-14 object-cover"
        />
        <div>
          <p className="font-semibold text-gray-900 text-sm">
            {testimonial.author}
          </p>
          <p className="text-gray-500 text-xs">{testimonial.handle}</p>
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

  const cardsToShow = 3;
  const totalSlides = testimonials.length;

  // Auto-slide every 5 seconds
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

  return (
    <section className="py-16 px-4 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          What Our Clients Say
        </h2>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => clearInterval(timeoutRef.current)}
          onMouseLeave={() => {
            timeoutRef.current = setInterval(() => {
              setCurrentIndex((prev) => (prev + 1) % totalSlides);
            }, 5000);
          }}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / cardsToShow)
                }%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-3">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Left Arrow */}
          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2  shadow-lg rounded-full p-3 hover:scale-110 transition-all z-10"
          >
            <ChevronLeft size={28} className="text-gray-800" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2  shadow-lg rounded-full p-3 hover:scale-110 transition-all z-10"
          >
            <ChevronRight size={28} className="text-gray-800" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-10">
            {[...Array(totalSlides)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`transition-all duration-300 ${
                  i === currentIndex
                    ? "w-10 h-2 bg-title rounded-full"
                    : "w-2 h-2 bg-gray-400 rounded-full"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
