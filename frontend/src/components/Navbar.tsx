import { MEDIA } from "../constants/media";

export const NavBar = () => {
  return (
    <nav className="p-4"> 
      <div className="flex justify-between gap-4 px-6 py-2 text-white font-neucha bg-dark-2 rounded-full">
        <a href="#">
          <img src={MEDIA.LOGO} alt="logo" className="w-20" />
        </a>
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
