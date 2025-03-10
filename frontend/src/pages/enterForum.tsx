import { Link } from "react-router";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";

import { MEDIA } from "../constants/media";

interface FormData {
  name: string;
  error?: string | boolean;
}

const EnterForum: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: "" });
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

  // To check if name is valid
  const checkName = (name: string) => {
    if (name.length < 5) return "Name must be atleast 5 letters long";
    else if (name == "fisher")
      return "Name already exists, please choose another one.";
    else return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (checkName(formData.name) == true) {
      console.log(formData);
    } else {
      setFormData({
        ...formData,
        error: checkName(formData.name),
      });
    }
  };

  return (
    <main className="flex h-screen">
      <div
        ref={divRef}
        className="relative w-6/7 md:w-3/7 m-auto text-white bg-dark-3 rounded-2xl py-4 px-8"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-grey font-semibold cursor-pointer text-xs font-neucha"
        >
          <i className="lni lni-arrow-left"></i>
          <span>Go back home</span>
        </Link>
        <span className="absolute right-4 -top-4 text-center py-1 px-2 text-lg rounded-md bg-yellow text-black font-lobster">
          Access Forum
        </span>

        <form onSubmit={handleSubmit} className="step-1 mt-8">
          {formData.error && (
            <div className="form-control font-neucha bg-red-500 py-1 text-center text-sm">
              <p>{formData.error}</p>
            </div>
          )}

          <div className="grid gap-6 mt-8">
            <div className="flex flex-col gap-2">
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name.trim()}
                onChange={handleChange}
                required
                placeholder="Enter Name"
                className="w-full courgette-regular bg-transparent px-3 py-2 text-white placeholder:text-white border-2 border-grey rounded-lg outline-none"
              />
              <span className="text-grey text-sm font-neucha">
                Enter your name to access your forum
              </span>
            </div>
            <button className="flex w-full gap-2 justify-center text-center bs-1 rounded-lg py-2 bg-white text-black px-4 font-lobster cursor-pointer">
              <span className="my-auto">Access Forum</span>
              <img
                src={MEDIA.rightArrow}
                alt="sparkling icon"
                className="w-5 my-auto"
              />
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default EnterForum;
