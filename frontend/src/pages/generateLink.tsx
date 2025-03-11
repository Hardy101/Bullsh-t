import { Link } from "react-router";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";

import { NavBar } from "../components/Navbar";
import { MEDIA } from "../constants/media";

interface FormData {
  name: string;
  error?: string | boolean;
}

const GetLink: React.FC = () => {
  const [activeStep, setActiveStep] = useState("link");
  const [formData, setFormData] = useState<FormData>({ name: "" });
  const [copied, setCopied] = useState(false);
  const divRef = useRef(null);
  const msgRef = useRef(null);

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
      setActiveStep("msg");
      scaleUp();
    } else {
      setFormData({
        ...formData,
        error: checkName(formData.name),
      });
    }
  };

  const handleCopy = () => {
    setCopied(true);

    setTimeout(() => setCopied(false), 3000);
  };

  const scaleUp = () => {
    gsap.fromTo(
      msgRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "elastic.out(0.7, 0.5)" }
    );
  };
  return (
    <main className="flex h-screen">
      <NavBar />
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
          Secret Message
        </span>
        {activeStep == "link" && (
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
                  Enter your name to generate a unique link
                </span>
              </div>
              <button className="flex w-full gap-2 justify-center text-center bs-1 rounded-lg py-2 bg-white text-black px-4 font-lobster cursor-pointer">
                <span className="my-auto">Generate Link</span>
                <img
                  src={MEDIA.sparkling}
                  alt="sparkling icon"
                  className="w-5 my-auto"
                />
              </button>
            </div>
          </form>
        )}
        <div
          ref={msgRef}
          id="step-2"
          className={`grid ${
            activeStep == "msg" ? "" : "hidden"
          }  gap-y-4 mt-8 font-neucha`}
        >
          <div>
            <h2 className="text-2xl font-fira-sans-bold">
              Great! Your link has been generated.
            </h2>
            <h3 className="text-grey">
              You can share it to anyone for them to send you messages.
            </h3>
          </div>
          <p className="flex gap-4">
            <Link
              to="https://www.google.com"
              target="_blank"
              rel="noreferrer"
              className="grow text-sm bg-dark-2 px-2 py-1 my-auto rounded-md hover:text-purple hover:underline"
            >
              https://www.bullshit/{formData.name}
            </Link>
            <button onClick={handleCopy} className="my-auto cursor-pointer">
              <span
                className={`px-4 py-1 rounded-md bs-4 transition-all duration-300 ${
                  copied ? "bg-green-500 text-white" : "bg-white text-black"
                }`}
              >
                {copied ? "copied!" : "copy"}
              </span>
            </button>
          </p>
          <div>
            <Link
              to="/messageboard"
              className="flex w-full gap-2 justify-center text-center bs-1 rounded-lg py-2 bg-white text-black px-4 font-lobster"
            >
              <span className="my-auto">View message board</span>
              <img
                src={MEDIA.sparkling}
                alt="sparkling icon"
                className="w-5 my-auto"
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GetLink;
