import { MEDIA } from "../constants/media";

export const NavBar = () => {
  return (
    <nav className="p-4">
      <div className="flex justify-between gap-4 px-6 py-2 text-white font-neucha bg-dark-2 rounded-full">
        <a href="#" className="my-auto">
          <img src={MEDIA.LOGO} alt="logo" className="w-20" />
        </a>
        <div className="grow input-control">
          <input
            type="text"
            name=""
            id=""
            placeholder="Paste forum invite link or type forum name"
            className="w-full px-3 py-2 rounded-full outline-none border border-dark-1 text-sm text-center"
          />
        </div>
        <ul className="flex gap-4 my-auto text-sm">
          <li>
            <a href="#">Forums</a>
          </li>
          <li>
            <a href="#">Create Forum</a>
          </li>
          <li>
            <a href="#">Register</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
