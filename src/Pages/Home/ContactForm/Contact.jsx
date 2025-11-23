import { useState, useEffect } from "react";
import { Mail, Phone, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import { PiImageSquareThin } from "react-icons/pi";

export default function Contact() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    description: "",
    file: null,
  });
  const [isScrolled, setIsScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY * 0.5);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div
      id="contact"
      className="relative w-full overflow-hidden -top-40 sm:-top-60 md:-top-80 "
    >
      <div
        className="absolute inset-0 w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=800&width=1200&query=office-team-meeting-parallax)",
          transform: `translateY(${isScrolled}px)`,
        }}
      />

      <div className="relative z-10 flex items-center justify-center  py-12 sm:py-20">
        <div className="w-full max-w-6xl">
          <div className="md:bg-white rounded-3xl  md:p-12 md:shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Column - Contact Info */}
              <div className="relative pt-5 md:pt-0">
                <div className="bg-black rounded-2xl p-6 sm:p-8 relative overflow-hidden min-h-full">
                  <div className="absolute -top-5 -left-5 w-[136px] h-[136px] bg-gradient-to-t from-[#00080C] to-[#5F3FA9] rounded-full opacity-80" />
                  <div className="absolute -bottom-5 -right-5 w-[136px] h-[136px] bg-gradient-to-b from-[#5F3FA9] to-[#00080C] rounded-full opacity-60" />

                  <div className="relative z-10 md:pt-20">
                    <h2 className="text-[24px] font-bold text-white mb-3">
                      Contact Information
                    </h2>
                    <p className="text-gray-300 mb-8 text-[15px] sm:text-[16px]">
                      Tell us about your project and we'll provide a customized
                      quote within 24 hours
                    </p>

                    <div className="space-y-8 sm:space-y-10">
                      <div className="flex items-start gap-4">
                        <div className="bg-white rounded-full p-3 flex-shrink-0">
                          <Mail className="w-6 h-6 text-background" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold mb-1 text-[19px] sm:text-[20px]">
                            Email
                          </h3>
                          <p className="text-gray-300 text-[15px] sm:text-[16px]">
                            ryan@soseeng.com
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-white rounded-full p-3 flex-shrink-0">
                          <Phone className="w-6 h-6 text-background" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold mb-1 text-[19px] sm:text-[20px]">
                            Phone Number
                          </h3>
                          <p className="text-gray-300 text-[15px] sm:text-[16px]">
                            (8625264 - 1390)
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-white rounded-full p-3 flex-shrink-0">
                          <Clock className="w-6 h-6 text-background" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold mb-1 text-[19px] sm:text-[20px]">
                            Business Hours
                          </h3>
                          <p className="text-gray-300 text-[15px] sm:text-[16px]">
                            Monday - Friday: 9:00 AM - 5:00 PM
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 mt-10 sm:mt-14">
                      <button className="bg-input rounded-full p-3 hover:bg-gray-200 transition">
                        <Facebook className="w-5 h-5 text-title" />
                      </button>
                      <button className="bg-input rounded-full p-3 hover:bg-gray-200 transition">
                        <Instagram className="w-5 h-5 text-title" />
                      </button>
                      <button className="bg-input rounded-full p-3 hover:bg-gray-200 transition">
                        <Twitter className="w-5 h-5 text-title" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div>
                <h2 className="text-3xl sm:text-[36px] font-bold text-gray-900 sm:mb-8 py-10 md:py-0 text-center md:text-start">
                  Request a Quote
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-medium text-[16px] text-title mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        placeholder="Enter first name"
                        className="w-full px-4 py-3 shadow-md rounded-lg border-2 border-white bg-input focus:outline-none focus:ring-0 focus:border-transparent text-[14px]"
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-[16px] text-title mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        placeholder="Enter last name"
                        className="w-full px-4 py-3 shadow-md rounded-lg border-2 border-white bg-input focus:outline-none focus:ring-0 focus:border-transparent text-[14px]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-medium text-[16px] text-title mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="user@gmail.com"
                        className="w-full px-4 py-3 shadow-md rounded-lg border-2 border-white bg-input focus:outline-none focus:ring-0 focus:border-transparent text-[14px]"
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-[16px] text-title mb-2">
                        Phone Number
                      </label>
                      <input
                        type="number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+"
                        className="w-full px-4 py-3 shadow-md rounded-lg border-2 border-white bg-input focus:outline-none focus:ring-0 focus:border-transparent text-[14px]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-medium text-[16px] text-title mb-2">
                      Descriptions
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Tell us about your project, requirements, and any specific needs."
                      rows="5"
                      className="w-full px-4 py-3 shadow-md rounded-lg border-2 border-white bg-input focus:outline-none focus:ring-0 focus:border-transparent text-[14px]"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-[16px] text-title mb-2">
                      Upload Photo (Optional)
                    </label>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full px-4 py-6 border-2 border-dashed border-gray-200 rounded-lg cursor-pointer hover:border-[#E9DFFF] transition">
                        <div className="flex flex-col items-center justify-center">
                          <PiImageSquareThin className="h-[46px] w-[46px]" />
                          <p className="text-sm text-gray-500">Choose File</p>
                        </div>
                        <input
                          type="file"
                          className="hidden"
                          onChange={handleFileChange}
                          accept="image/*"
                        />
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-input text-title border-2 border-white shadow-md hover:cursor-pointer text-white font-semibold py-3 rounded-lg transition duration-200"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
