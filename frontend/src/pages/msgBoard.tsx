import { NavBar } from "../components/Navbar";
import { Link } from "react-router";

const MessageBoard = () => {
  return (
    <main className="flex">
      <NavBar />
      <div className="font-neucha text-white rounded-2xl py-4 px-8 mt-32">
        <span className="text-center px-4 py-2 text-xl bg-yellow text-black">
          Secret Message
        </span>
        <ul className="Messages grid gap-3 mt-8">
          <li>
            <p className="grid">
              <span className="font-lobster">Bro you reek of piss</span>
              <span className="text-neuc text-sm text-grey">12:29 am</span>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default MessageBoard;
