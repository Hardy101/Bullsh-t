import { NavBar } from "../components/Navbar";
import { Link } from "react-router";

const GetLink = () => {
  return (
    <main className="flex h-screen">
      <NavBar />
      <div className="font-neucha w-6/7 md:w-3/7 m-auto text-white bg-dark-3 rounded-2xl py-4 px-8">
        <span className="block w-4/8 text-center py-2 text-xl bg-yellow text-black mx-auto -mt-10 -rotate-6">
          Secret Message
        </span>
        <ul className="grid gap-3 list-disc mt-8">
          <li>
            <p className="grid">
              <span className="font-lobster">Step 1</span>
              <span className="text-neuc">
                Enter your name or name of forum for secret link
              </span>
            </p>
          </li>
          <li>
            <p className="grid">
              <span className="font-lobster">Step 2</span>
              <span className="text-neuc">
                Get generated link and Share to friend, colleagues and family!
              </span>
            </p>
          </li>
          <li>
            <p className="grid">
              <span className="font-lobster">Step 3</span>
              <span className="text-neuc">
                Once anyone sends a message they appear on the message board
              </span>
            </p>
          </li>
          <li className="flex mt-6">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Name"
              className="w-full font-neucha bg-white px-4 py-2 text-gray-600 placeholder:text-gray-600 rounded-lg outline-none"
            />
          </li>
          <li className="flex">
            <Link to="/" className="w-full rounded-lg py-2 bg-purple px-4">
              Generate Link
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default GetLink;
