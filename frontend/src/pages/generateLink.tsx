import { Link } from "react-router";
import { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";

import { MEDIA } from "../constants/media";
import ScaleUpDiv from "../components/scaleupDiv";

interface FormData {
  name: string;
  error?: string | boolean;
}

const GetLink: React.FC = () => {
  const [activeStep, setActiveStep] = useState("link");
  const [formData, setFormData] = useState<FormData>({ name: "" });
  const [copied, setCopied] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  const msgRef = useRef<HTMLDivElement>(null);

  // Scale up main div on load
  useEffect(() => {
    animateScale(divRef);
  }, []);

  // Reusable animation function
  const animateScale = useCallback(
    (ref: React.RefObject<HTMLDivElement | null>) => {
      if (!ref.current) return;

      gsap.fromTo(
        ref.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "elastic.out(1, 0.5)" }
      );
    },
    []
  );

  // To check if name of forum is valid
  const checkName = (name: string): string | boolean => {
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
    const validation = checkName(formData.name);

    if (validation == true) {
      setActiveStep("msg");
      animateScale(msgRef);
    } else {
      setFormData((prev) => ({
        ...prev,
        error: validation,
      }));
    }
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <ScaleUpDiv title="Secret Message">
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
            <button className="flex w-full gap-2 justify-center text-center bs-1 rounded-lg py-2 bg-white text-black px-4 font-lobster ">
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
          <button onClick={handleCopy} className="my-auto">
            <span
              className={`px-4 py-1 rounded-md bs-2 transition-all duration-300 ${
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
    </ScaleUpDiv>
  );
};

export default GetLink;
