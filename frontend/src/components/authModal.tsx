import gsap from "gsap";
import { useEffect, useRef } from "react";

interface ModalProps {
  showModal: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<ModalProps> = ({ showModal, onClose }) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (showModal) {
      const tl = gsap.timeline();

      tl.fromTo(
        parentRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" }
      ).fromTo(
        childRef.current,
        {
          opacity: 0,
          scale: 0.3,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.2"
      );
    } else {
      gsap.to(parentRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [showModal]);

  return (
    <div ref={parentRef} className={`fixed top-0 w-full h-screen font-neucha`}>
      <div className="child absolute w-full h-full bg-black opacity-80"></div>
      <div ref={childRef} className="grid h-full">
        <form
          action="#"
          className="relative w-4/5 md:w-2/5 m-auto rounded-xl p-4 bg-white"
        >
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-1 rounded-sm text-sm text-black cursor-pointer bs-4 px-2 border hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out"
          >
            <i className="lni lni-xmark"></i>
            close
          </button>
          <span className="absolute right-4 -top-4 text-center py-1 px-2 text-lg rounded-md bg-yellow text-black font-lobster">
            Authenticate account
          </span>
          <div className="form-control mt-8">
            <input
              type="text"
              className="w-full rounded-md text-black bg-grey outline-none p-2 text-sm"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="form-control mt-4">
            <input
              type="text"
              className="w-full rounded-md text-black bg-grey outline-none p-2 text-sm"
              placeholder="Enter Password"
            />
          </div>
          <div className="form-control mt-4">
            <button
              type="button"
              className="w-full bg-purple bs-1 py-2 rounded-xl cursor-pointer"
            >
              Authenticate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
