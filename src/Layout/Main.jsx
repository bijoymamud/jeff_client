import Footer from "@/Shared/Footer";
import Navbar from "@/Shared/Navbar";
import Wrapper from "@/Wrapper/Wrapper";
import { Outlet } from "react-router";

const Main = () => {
  return (
    <div className="bg-[#F7F7F7]">
      <Navbar />

      <Wrapper>
        <Outlet />
      </Wrapper>
        <Footer />
    </div>
  );
};

export default Main;
