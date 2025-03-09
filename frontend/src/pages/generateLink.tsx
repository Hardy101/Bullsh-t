import { Link } from "react-router";

import { MEDIA } from "../constants/media";
import { useState } from "react";

const GetLink = () => {
  const [activeStep, setActiveStep] = useState("link");
  return (
    <main className="flex h-screen">
      <div className="relative w-6/7 md:w-3/7 m-auto text-white bg-dark-3 rounded-2xl py-4 px-8">
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
          <div className="step-1 mt-8">
            <form action={"#"} onSubmit={(e) => e.preventDefault()}>
              {errors && (
                <div className="form-control bg-red-500 py-1 text-center text-sm">
                  {/* <p>The name already exists, please try a different one.</p> */}
                  <p>Name cannot be blank. Please enter something.</p>
                </div>
              )}

              <div className="grid gap-6 mt-8">
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter Name"
                    className="w-full courgette-regular bg-transparent px-3 py-2 text-white placeholder:text-white border-2 border-grey rounded-lg outline-none"
                  />
                  <span className="text-grey text-sm font-neucha">
                    Enter your name to generate a unique link
                  </span>
                </div>
                <button
                  onClick={() => setActiveStep("msg")}
                  className="flex w-full gap-2 justify-center text-center bs-1 rounded-lg py-2 bg-white text-black px-4 font-lobster"
                >
                  <span className="my-auto">Generate Link</span>
                  <img
                    src={MEDIA.sparkling}
                    alt="sparkling icon"
                    className="w-5 my-auto"
                  />
                </button>
              </div>
            </form>
          </div>
        )}
        {activeStep == "msg" && (
          <div id="step-2" className="grid gap-y-4 mt-8 font-neucha">
            <div>
              <h2 className="text-2xl font-fira-sans-bold">
                Great! Your link has been generated.
              </h2>
              <h3 className="text-grey">
                You can share then to anyone for them to send you messages.
              </h3>
            </div>
            <p className="flex gap-4">
              <Link
                to="https://www.google.com"
                target="_blank"
                rel="noreferrer"
                className="grow text-sm bg-dark-2 px-2 py-1 my-auto rounded-md hover:text-purple hover:underline"
              >
                https://www.bullshit/name
              </Link>
              <button className="my-auto">
                <i className="lni lni-clipboard"></i>
              </button>
            </p>
            <div>
              <Link
                to="/messageboard"
                className="flex w-full gap-2 justify-center text-center bs-1 rounded-lg py-2 bg-white text-black px-4 font-lobster"
              >
                <span className="my-auto">View Messages</span>
                <img
                  src={MEDIA.sparkling}
                  alt="sparkling icon"
                  className="w-5 my-auto"
                />
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default GetLink;
