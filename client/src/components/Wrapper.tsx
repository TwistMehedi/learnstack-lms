import { ReactNode } from "react";
import Navbar from "./Navbar/Navbar";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="bg-base-200 min-h-screen w-full">
      <div className="max-w-[1200px] mx-auto bg-base-100 min-h-screen shadow-lg flex flex-col">
        <header className="sticky top-0 z-50 bg-base-100/80 backdrop-blur-md border-b">
          <Navbar />
        </header>
        <main className="p-4 md:p-8 flex-grow">{children}</main>
      </div>
    </div>
  );
};

export default Wrapper;
