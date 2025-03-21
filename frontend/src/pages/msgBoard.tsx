import { Link } from "react-router";

import { MEDIA } from "../constants/media";

const MessageBoard = () => {
  return (
    <main className="min-h-screen">
      <div className="font-neucha grid gap-6 text-white rounded-2xl py-4 px-8 mt-24">
        <div className="actions inline-flex gap-4 items-center text-sm">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-grey font-semibold text-sm font-neucha"
          >
            <i className="lni lni-arrow-left"></i>
            <span>Go home</span>
          </Link>
          <button className="font-semibold hover:text-red-500">
            Delete all messages
          </button>
        </div>
        <p className="bg-red-500 px-2 py-1">
          Forums, excluding your personal one, will be automatically deleted
          after 24 hours.
        </p>
        <h1 className="font-lobster text-3xl mt-4">
          <span className="text-xl text-yellow">69</span> Messages for{" "}
          <span className="text-purple underline hover:text-purple-300">
            Fitzgerald
          </span>
        </h1>
        <ul className="Messages grid gap-3">
          <li className="flex gap-4">
            <img
              src={MEDIA.ANONYM}
              alt="anonymous image"
              className="w-6 invert mb-auto"
              style={{
                pointerEvents: "none",
              }}
            />
            <p className="grid">
              <span className="text-lg">
                Bro you smell like lavender, What perfume do you wear?
              </span>
              <span className="text-sm text-grey">12:29 am</span>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default MessageBoard;
