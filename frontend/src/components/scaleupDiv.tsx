import { Link } from "react-router";
import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";

export interface FormData {
  name: string;
  password: string;
  error?: string | boolean;
}

interface DivProps {
  children: ReactNode;
  title: string;
}

const ScaleUpDiv: React.FC<DivProps> = ({ children, title }) => {
  const divRef = useRef(null);

  // Scale up main div on load
  useEffect(() => {
    gsap.fromTo(
      divRef.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
      }
    );
  }, []);

  return (
    <main className="flex h-screen">
      <div
        ref={divRef}
        className="relative w-6/7 md:w-3/7 m-auto text-white bg-dark-3 rounded-2xl py-4 px-8"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-grey font-semibold text-xs font-neucha"
        >
          <i className="lni lni-arrow-left"></i>
          <span>Go back home</span>
        </Link>
        <span className="absolute right-4 -top-4 text-center py-1 px-2 text-lg rounded-md bg-yellow text-black font-lobster">
          {title}
        </span>

        {children}
      </div>
    </main>
  );
};

export default ScaleUpDiv;
