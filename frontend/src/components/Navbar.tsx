import { MEDIA } from "../constants/media";

export const NavBar = () => {
  return (
    <nav>
      <div className="flex justify-between gap-4 px-6 py-4 text-white font-neucha  rounded-full">
        <a href="#" className="my-auto">
          <img src={MEDIA.LOGO} alt="logo" className="w-20" />
        </a>
        <div className="grow input-control flex justify-center">
          <input
            type="text"
            name=""
            id=""
            placeholder="Paste forum invite link or type forum name"
            className="w-3/5 px-3 py-2 rounded-md outline-none border border-[#B2BEB5] text-xs text-center"
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
