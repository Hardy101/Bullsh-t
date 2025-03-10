import { Link } from "react-router";

import { NavBar } from "../components/Navbar";
import { MEDIA } from "../constants/media";

const Home: React.FC = () => {
  return (
    <main className="flex h-screen">
      <NavBar />
      <div className="font-courgette w-4/5 md:w-3/5 m-auto text-white">
        <p className="grid gap-y-6 text-5xl text-center">
          <span className="">We listen, we don't judge.</span>
          <span className="text-3xl text-grey text-center">
            okay...maybe a little
          </span>
        </p>
        <p className="flex gap-4 mt-8 justify-center text-base font-lobster">
          <Link
            to="/getlink"
            className="inline-flex items-center gap-1 bg-purple text-black px-4 py-2 rounded-sm"
          >
            Generate Link
            <img src={MEDIA.sparkling} alt="right arrow" className="w-8" />
          </Link>
          <Link
            to="/forum"
            className="inline-flex items-center gap-1 bg-yellow text-black px-4 py-2 rounded-sm"
          >
            I own a forum
            <img src={MEDIA.rightArrow} alt="right arrow" className="w-8" />
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Home;
