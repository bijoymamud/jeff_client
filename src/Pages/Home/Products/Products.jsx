// import { ArrowUpRight } from "lucide-react";
// import Logo from "../../../../src/assets/jeff_logo.png";
// import { Link } from "react-router";
// import { useState, useEffect, useRef } from "react";

// const projects = [
//   {
//     id: "1",
//     category: "Stairway",
//     title: "Misc Jobs & Shop",
//     description:
//       "How do you create compelling presentations that wow your colleagues and impress your managers?",
//     carouselImages: [
//       "https://img.freepik.com/free-photo/construction-site-sunset_23-2152006125.jpg?w=740&q=80",
//       "https://plus.unsplash.com/premium_photo-1683134181132-d21384512e01?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbnN0cnVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
//       "https://www.l37.com.au/wp-content/uploads/2023/11/230925_GlenShian_L37_Reinders_084-1-2048x1088.jpeg",
//     ],
//     logo: Logo,
//     date: "20 Jan 2025",
//   },
//   {
//     id: "2",
//     category: "Sakhou",
//     title: "220 Central Park Lend Lease",
//     description:
//       "How do you create compelling presentations that wow your colleagues and impress your managers?",
//     carouselImages: [
//       "https://i0.wp.com/glgassets.com/wp-content/uploads/2020/09/construction.jpg",
//       "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070",
//       "https://www.shutterstock.com/image-photo/construction-apartment-buildings-dense-urban-600nw-2547873665.jpg",
//     ],
//     logo: Logo,
//     date: "20 Jan 2025",
//   },
//   {
//     id: "3",
//     category: "Walkway",
//     title: "American Dream",
//     description:
//       "How do you create compelling presentations that wow your colleagues and impress your managers?",
//     carouselImages: [
//       "https://wallsanddreams.com/wp-content/uploads/2024/10/image2-2.jpg",
//       "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070",
//       "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070",
//       "https://www.irmi.com/cdn-cgi/image/width=600,height=400,quality=80/DITA%20Import/Lyons_ditamap_/building-a-house-construction-worker.jpg",
//     ],
//     logo: Logo,
//     date: "20 Jan 2025",
//   },
//   {
//     id: "4",
//     category: "Shop",
//     title: "Bakes Brewery",
//     description:
//       "How do you create compelling presentations that wow your colleagues and impress your managers?",
//     carouselImages: [
//       "https://wrat.com/uploads/2022/10/bakes-3.jpg",
//       "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070",
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpHODYomVhKHYCmDJKblBc73T650yDSCyZ0A&s",
//       "https://img.freepik.com/free-photo/working-hard-building-man-construction-worker_1122-1849.jpg?semt=ais_hybrid&w=740&q=80",
//     ],
//     logo: Logo,
//     date: "20 Jan 2025",
//   },
//   {
//     id: "5",
//     category: "Staircase",
//     title: "Catholic Diaste",
//     description:
//       "How do you create compelling presentations that wow your colleagues and impress your managers?",
//     carouselImages: [
//       "https://aws.paragonstairs.com/wp-content/uploads/2025/07/02133733/custom-floating-stair-systems.webp",
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
//       "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070",
//       "https://img.freepik.com/premium-photo/teamwork-architecture-construction-worker-working-planning-collaboration-construction-site-project-building-home-renovation-engineer-industrial-creative-people-development_590464-110724.jpg?semt=ais_hybrid&w=740&q=80",
//     ],
//     logo: Logo,
//     date: "20 Jan 2025",
//   },
//   {
//     id: "6",
//     category: "Route Top",
//     title: "Frosch Travel",
//     description:
//       "How do you create compelling presentations that wow your colleagues and impress your managers?",
//     carouselImages: [
//       "https://im.rediff.com/money/2023/mar/14construction.jpg",
//       "https://img.freepik.com/premium-photo/two-colleagues-discussing-data-working-tablet-laptop-with-architectural-project-construction-site-desk-office_71455-1817.jpg?semt=ais_hybrid&w=740&q=80",
//       "https://images.unsplash.com/photo-1593786267440-550458cc882a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2UlMjBjb25zdHJ1Y3Rpb258ZW58MHx8MHx8fDA%3D",
//       "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070",
//     ],
//     logo: Logo,
//     date: "20 Jan 2025",
//   },
// ];

// function HoverCarousel({ images }) {
//   const [index, setIndex] = useState(0);
//   const intervalRef = useRef(null);

//   const startSliding = () => {
//     if (intervalRef.current) return;
//     intervalRef.current = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 1000);
//   };

//   const stopSliding = () => {
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//       intervalRef.current = null;
//     }
//   };

//   useEffect(() => {
//     return () => stopSliding();
//   }, []);

//   return (
//     <div
//       className="relative h-68 p-3 bg-muted overflow-hidden group"
//       onMouseEnter={startSliding}
//       onMouseLeave={stopSliding}
//     >
//       {images.map((img, i) => (
//         <img
//           key={i}
//           src={img}
//           alt={i === 0 ? "Project image" : ""}
//           className="absolute inset-0 w-full h-96 object-cover transition-opacity duration-1000 ease-in-out"
//           style={{
//             opacity: i === index ? 1 : 0,
//             zIndex: i === index ? 10 : 1,
//           }}
//         />
//       ))}

//       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
//         {images.map((_, i) => (
//           <div
//             key={i}
//             className={`transition-all duration-300 ${
//               i === index
//                 ? "w-7 h-1.5 bg-white rounded-full"
//                 : "w-1.5 h-1.5 bg-white/60 rounded-full"
//             }`}
//           />
//         ))}
//       </div>

//       <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-300 pointer-events-none" />
//     </div>
//   );
// }

// export default function OurProjects() {
//   return (
//     <section id="projects" className="w-full py-16 ">
//       <div className="">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-title">
//           Our Projects
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {projects?.map((project) => (
//             <div
//               key={project.id}
//               className="bg-card border border-gray-200 shadow-md hover:shadow-md transition-shadow overflow-hidden group cursor-pointer"
//             >
//               <HoverCarousel images={project.carouselImages} />

//               <div className="p-3 flex flex-col gap-4">
//                 <p className="text-[14px] text-muted-foreground text-background font-semibold uppercase tracking-wide">
//                   {project.category}
//                 </p>

//                 <div className="flex items-start justify-between gap-2">
//                   <h3 className="text-[24px] font-semibold text-foreground leading-tight">
//                     {project.title}
//                   </h3>
//                   <ArrowUpRight className="w-5 h-5 text-primary flex-shrink-0 mt-1 cursor-pointer" />
//                 </div>

//                 <p className="text-label line-clamp-3">{project.description}</p>

//                 <div className="flex flex-col items-start border-border pt-3">
//                   <img
//                     src={Logo}
//                     alt="logo"
//                     className="md:h-[18px] md:w-[40px] cursor-pointer"
//                   />
//                   <p className="text-label mt-2 text-[14px]">{project.date}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="flex items-center justify-end mt-12">
//           <Link
//             href="#"
//             className="text-background text-[14px] hover:underline transition-colors"
//           >
//             View All →
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

import { ArrowUpRight, X } from "lucide-react";
import Logo from "../../../../src/assets/jeff_logo.png";
import { Link } from "react-router";
import { useState, useEffect, useRef } from "react";

const projects = [
  {
    id: "1",
    category: "Stairway",
    title: "Misc Jobs & Shop",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    carouselImages: [
      "https://img.freepik.com/free-photo/construction-site-sunset_23-2152006125.jpg?w=740&q=80",
      "https://plus.unsplash.com/premium_photo-1683134181132-d21384512e01?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbnN0cnVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://www.l37.com.au/wp-content/uploads/2023/11/230925_GlenShian_L37_Reinders_084-1-2048x1088.jpeg",
    ],
    logo: Logo,
    date: "20 Jan 2025",
  },
  {
    id: "2",
    category: "Sakhou",
    title: "220 Central Park Lend Lease",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    carouselImages: [
      "https://i0.wp.com/glgassets.com/wp-content/uploads/2020/09/construction.jpg",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070",
      "https://www.shutterstock.com/image-photo/construction-apartment-buildings-dense-urban-600nw-2547873665.jpg",
    ],
    logo: Logo,
    date: "20 Jan 2025",
  },
  {
    id: "3",
    category: "Walkway",
    title: "American Dream",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    carouselImages: [
      "https://wallsanddreams.com/wp-content/uploads/2024/10/image2-2.jpg",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070",
      "https://www.irmi.com/cdn-cgi/image/width=600,height=400,quality=80/DITA%20Import/Lyons_ditamap_/building-a-house-construction-worker.jpg",
    ],
    logo: Logo,
    date: "20 Jan 2025",
  },
  {
    id: "4",
    category: "Shop",
    title: "Bakes Brewery",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    carouselImages: [
      "https://wrat.com/uploads/2022/10/bakes-3.jpg",
      "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpHODYomVhKHYCmDJKblBc73T650yDSCyZ0A&s",
      "https://img.freepik.com/free-photo/working-hard-building-man-construction-worker_1122-1849.jpg?semt=ais_hybrid&w=740&q=80",
    ],
    logo: Logo,
    date: "20 Jan 2025",
  },
  {
    id: "5",
    category: "Staircase",
    title: "Catholic Diaste",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    carouselImages: [
      "https://aws.paragonstairs.com/wp-content/uploads/2025/07/02133733/custom-floating-stair-systems.webp",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070",
      "https://img.freepik.com/premium-photo/teamwork-architecture-construction-worker-working-planning-collaboration-construction-site-project-building-home-renovation-engineer-industrial-creative-people-development_590464-110724.jpg?semt=ais_hybrid&w=740&q=80",
    ],
    logo: Logo,
    date: "20 Jan 2025",
  },
  {
    id: "6",
    category: "Route Top",
    title: "Frosch Travel",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    carouselImages: [
      "https://im.rediff.com/money/2023/mar/14construction.jpg",
      "https://img.freepik.com/premium-photo/two-colleagues-discussing-data-working-tablet-laptop-with-architectural-project-construction-site-desk-office_71455-1817.jpg?semt=ais_hybrid&w=740&q=80",
      "https://images.unsplash.com/photo-1593786267440-550458cc882a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2UlMjBjb25zdHJ1Y3Rpb258ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070",
    ],
    logo: Logo,
    date: "20 Jan 2025",
  },
];

function HoverCarousel({ images, onImageClick }) {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const startSliding = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 1500);
  };

  const stopSliding = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    return () => stopSliding();
  }, []);

  return (
    <div
      className="relative h-68 bg-muted overflow-hidden group"
      onMouseEnter={startSliding}
      onMouseLeave={stopSliding}
    >
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Project ${i + 1}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out cursor-pointer"
          style={{
            opacity: i === index ? 1 : 0,
            zIndex: i === index ? 10 : 1,
          }}
          onClick={(e) => {
            e.stopPropagation();
            onImageClick?.(i);
          }}
        />
      ))}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        {images.map((_, i) => (
          <div
            key={i}
            className={`transition-all duration-300 ${
              i === index
                ? "w-8 h-2 bg-white rounded-full"
                : "w-2 h-2 bg-white/60 rounded-full"
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 pointer-events-none" />
    </div>
  );
}

export default function OurProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (project, index = 0) => {
    setSelectedProject(project);
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const goToNext = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.carouselImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  const goToPrev = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.carouselImages.length - 1 : prev - 1
      );
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (!selectedProject) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedProject]);

  return (
    <>
      <section id="projects" className="w-full py-16">
        <div className=" mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-title">
            Our Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-card border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <HoverCarousel
                  images={project.carouselImages}
                  onImageClick={(i) => openModal(project, i)}
                />

                <div className="p-6 flex flex-col gap-4">
                  <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    {project.category}
                  </p>

                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-bold text-foreground leading-tight">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  </div>

                  <p className="text-muted-foreground line-clamp-2 text-sm">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <img src={Logo} alt="Logo" className="h-5 w-auto" />
                    <span className="text-sm text-muted-foreground">
                      {project.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end mt-12">
            <Link
              to="/projects"
              className="text-sm font-medium hover:underline transition-colors"
            >
              View All →
            </Link>
          </div>
        </div>
      </section>

      {/* Fullscreen Image Gallery Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative w-full h-full max-w-7xl mx-4 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 z-50 text-white hover:text-gray-300 transition"
            >
              <X className="w-10 h-10" />
            </button>

            {/* Main Image */}
            <div className="flex-1 flex items-center justify-center px-10">
              <img
                src={selectedProject.carouselImages[currentImageIndex]}
                alt={selectedProject.title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 backdrop-blur p-4 rounded-full transition"
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 backdrop-blur p-4 rounded-full transition"
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Thumbnails */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 flex-wrap justify-center max-w-4xl">
              {selectedProject.carouselImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImageIndex(i)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-4 transition-all ${
                    i === currentImageIndex
                      ? "border-white shadow-2xl"
                      : "border-white/30 opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Title & Counter */}
            <div className="absolute top-8 left-8 text-white">
              <h3 className="text-4xl font-bold">{selectedProject.title}</h3>
              <p className="text-xl opacity-80">{selectedProject.category}</p>
            </div>

            <div className="absolute bottom-32 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur px-6 py-3 rounded-full text-white text-lg">
              {currentImageIndex + 1} / {selectedProject.carouselImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
