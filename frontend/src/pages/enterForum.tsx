import { useNavigate } from "react-router";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";

import { MEDIA } from "../constants/media";
import ScaleUpDiv from "../components/scaleupDiv";

export interface FormData {
  name: string;
  password: string;
  error?: string | boolean;
}

const EnterForum: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    password: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

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
      setIsSubmitted(true);
    } else {
      setFormData({
        ...formData,
        error: checkName(formData.name),
      });
    }
  };

  useEffect(() => {
    isSubmitted && navigate("/messageboard");
  }, [isSubmitted, navigate]);
  return (
    <ScaleUpDiv title="Enter Forum">
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
              className="w-full courgette-regular bg-transparent px-3 py-2 text-white placeholder:text-white border-2 border-grey rounded-lg outline-none focus:border-purple"
            />
            <span className="text-grey text-sm font-neucha">
              Enter your name to access your forum
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter Password"
              className="w-full courgette-regular bg-transparent px-3 py-2 text-white placeholder:text-white border-2 border-grey rounded-lg outline-none focus:border-purple"
            />
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
    </ScaleUpDiv>
  );
};

export default EnterForum;
